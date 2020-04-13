const { exec } = require('shelljs');

function execSilent(code: string): Promise<string | void> {
  return new Promise((resolve, reject) => {
    exec(
      code,
      { silent: true },
      (code: string | number, stdout: string | void, stderr: string | void) => {
        if (+code === 0) {
          resolve(stdout);
        } else if (stderr) {
          reject(new Error(stdout || 'Unknown shell error.'));
        }
      },
    );
  });
}

export default execSilent;
