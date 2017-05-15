const fs = require('fs')
const path = require('path')
const boilerplateName = 'react-component-boilerplate'
const fileName = 'package.json'
const encoding = 'utf8'
const dirname = path.resolve('.').split('/').reverse()[0]
const gitUserName = 'MainShayne233'
const description = 'starting place for creating a react component'

fs.readFile(fileName, encoding, function(err, file) {
  const updatedPackageDotJson = file.split(boilerplateName)
                                    .join(dirname)
                                    .split(gitUserName)
                                    .join('yourGitUsername')
                                    .split(description)
                                    .join('A cool React component')
  fs.writeFile(fileName, updatedPackageDotJson, encoding, (err) => {
    if (err) throw(err)
    console.log('Succesfully renamed app')
  })
})
