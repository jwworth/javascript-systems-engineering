import {writeFile, mkdir} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';

const url =
  'https://sourceforge.net/projects/lodash.mirror/files/latest/download';
const archive = 'lodash.tar.gz';
const destination = 'lodash';

async function main() {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Download failed: ${response.status}`);
  }

  await writeFile(archive, Buffer.from(await response.arrayBuffer()));
  await mkdir(destination, {recursive: true});

  execFileSync('tar', ['-xzf', archive, '-C', destination], {
    stdio: 'inherit',
  });

  console.log(`Extracted into ./${destination}`);
}

main().catch(console.error);
