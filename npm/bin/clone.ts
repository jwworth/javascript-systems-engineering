import {execSync} from 'child_process';

const repoURL = 'git@github.com:lodash/lodash.git';

try {
  console.log('Cloning lodash...');
  execSync(`git clone ${repoURL}`, {stdio: 'inherit'});
  console.log('Cloned!');
} catch (error) {
  console.log('Failed to clone repo: ', error);
}
