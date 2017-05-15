const fs = require('fs')
const path = require('path')
const boilerplateName = 'react-component-boilerplate'
const packageDotJson = 'package.json'
const readMe = 'README.md'
const indexDotHtml = './src/index.html'
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
})

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

fs.readFile(indexDotHtml, encoding, function(err, file) {
  const updatedIndexDotHtml = file.split('React Component Boilerplate')
                                  .join(dirname)
  fs.writeFile(indexDotHtml, updatedIndexDotHtml, encoding, function(err) {
    if (err) throw(err)
    console.log('Successfully updated src/index.html')
  })
})
