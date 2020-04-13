import * as path from 'path';
import { promises as fs } from 'fs';
import * as del from 'del';
import { setDropboxIgnore } from 'dropbox-ignore';
import execSilent from './lib/exec-silent';

main(process.env.PWD);

export async function main(targetPath: string): Promise<boolean> {
  const nodeModulesPath = path.join(targetPath, 'node_modules');

  try {
    const stats = await fs.stat(nodeModulesPath);
    if (stats.isDirectory()) {
      console.log('Delete node_modules directory...');
      await del(nodeModulesPath);
    }
  } catch {
    // eslint-disable-next-line no-empty
  }

  await fs.mkdir(nodeModulesPath, { recursive: true });
  await setDropboxIgnore({
    filePath: nodeModulesPath,
    ignore: true,
    silent: true,
  });

  try {
    console.log('Install dependencies...');
    await execSilent('npm i');
    console.log('Done!');
    return true;
  } catch (error) {
    console.warn(
      `dependencies install fail: ${error.toString()}\n` +
        'Please install dependencies yourself.',
    );
    return false;
  }
}
