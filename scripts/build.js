const fs = require('fs');
const path = require('path');

const projectPath = path.dirname(__dirname) + '/';
const srcPath = projectPath + 'src/';

fs.readdir(srcPath, (err, files) => {
  if (err) return;

  let content = files.reduce((acc, file) => acc + fs.readFileSync(srcPath + file, 'utf-8'), '');
  fs.writeFileSync(projectPath + 'bundle.js', content);
})