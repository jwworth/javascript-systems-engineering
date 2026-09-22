import {execSync} from 'child_process';

function main() {
  console.log('Checkings status...');

  process.chdir('./lodash');
  execSync(`git status`, {stdio: 'inherit'});

  console.log('Status read!');
}

try {
  main();
} catch (error) {
  console.error('Status check failed.');
  process.exitCode = 1;
}
