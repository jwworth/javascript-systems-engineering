import {execSync} from 'child_process';

try {
  console.log('Checkings status...');

  process.chdir('./lodash');
  execSync(`git status`, {stdio: 'inherit'});

  console.log('Status read!');
} catch (error) {
  console.log('Failed to access status: ', error);
}
