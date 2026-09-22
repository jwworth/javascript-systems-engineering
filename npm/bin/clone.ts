import {execFileSync} from 'node:child_process';

const repoUrl = 'git@github.com:lodash/lodash.git';

function main() {
  console.log('Cloning lodash...');

  execFileSync('git', ['clone', repoUrl], {
    stdio: 'inherit',
  });

  console.log('Cloned!');
}

try {
  main();
} catch (error) {
  console.error('Clone failed: ', error);
  process.exitCode = 1;
}
