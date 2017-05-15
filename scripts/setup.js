const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec
const boilerplateName = 'react-component-boilerplate'
const packageDotJson = 'package.json'
const readMe = 'README.md'
const indexDotHtml = './demo/index.html'
const encoding = 'utf8'
const dirname = path.resolve('.').split('/').reverse()[0]
const gitUserName = 'MainShayne233'
const description = 'starting place for creating a react component'

const updatedReadMe = [
  `# ${dirname}`,
  'A cool React component',
].join("\n")

fs.writeFile(readMe, updatedReadMe, encoding, (err) => {
  if (err) throw(err)
  console.log('Successfully updated README.md')
  updatePackageDotJson()
})

function updatePackageDotJson() {


  fs.readFile(packageDotJson, encoding, function(err, file) {
    const updatedPackageDotJson = file.split(boilerplateName)
                                      .join(dirname)
                                      .split(gitUserName)
                                      .join('yourGitUsername')
                                      .split(description)
                                      .join('A cool React component')
                                      .split("\n")
                                      .filter(line => { return line.indexOf("\"setup\":") === -1 })
                                      .join("\n")
  
    fs.writeFile(packageDotJson, updatedPackageDotJson, encoding, function(err) {
      if (err) throw(err)
      console.log('Successfully updated package.json')
    })
  })

  updateIndexDotHtml()
}

function updateIndexDotHtml() {

  fs.readFile(indexDotHtml, encoding, function(err, file) {
    const updatedIndexDotHtml = file.split('React Component Boilerplate')
                                    .join(dirname)
    fs.writeFile(indexDotHtml, updatedIndexDotHtml, encoding, function(err) {
      if (err) throw(err)
      console.log('Successfully updated src/index.html')
    })
  })
  removeScripts()
}

function removeScripts() {
  exec('rm -rf scripts/', function(error, stdout, stderr) {
    if (error) throw(error)
    console.log("Succesfully removed scripts/ directory")
  })
  initGit()
}

function initGit() {
  exec('rm -rf .git && git init && git add -A && git commit -m "init"', function(error, stdout, stderr) {
    if (error) throw(error)
    console.log("Succesfully initialized git")
  })
}
