import * as path from 'path';
import { main } from '../index';

jest.setTimeout(1e6);

it('should ignore files', async () => {
  const testPath = path.join(__dirname, '../');
  console.log(testPath);
  const success = await main(testPath);
  await new Promise((res) => {
    setTimeout(res, 100);
  });
  expect(success).toBe(true);
});
