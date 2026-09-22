import {execSync} from 'child_process';

try {
  console.log('Checking out main...');

  process.chdir('./lodash');
  execSync(`git checkout main`, {stdio: 'inherit'});

  console.log('Checked out!');
} catch (error) {
  console.log('Failed to checkout main: ', error);
}
