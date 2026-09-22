import {execSync} from 'node:child_process';

function main() {
  console.log('Checking out main...');

  process.chdir('./lodash');
  execSync(`git checkout main`, {stdio: 'inherit'});

  console.log('Checked out!');
}

try {
  main();
} catch (error) {
  console.error('Check out failed: ', error);
  process.exitCode = 1;
}
