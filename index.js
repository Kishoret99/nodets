#!/usr/bin/env node
const { execSync } = require('child_process');
const folderName = process.argv[2] || 'nodets';
const GIT_REPO_URL = 'git@github-personal:alexjoverm/typescript-library-starter.git';
const execCommand = `git clone ${GIT_REPO_URL} ${folderName}`;
console.log(`=> RUNNING THE COMMAND: \n ${execCommand}`);
execSync(execCommand, {
    stdio: [process.stdin, process.stdout, process.stderr]
});
