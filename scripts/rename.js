const fs = require('fs')
const path = require('path')
const boilerplateName = 'react-component-boilerplate'
const packageDotJson = 'package.json'
const readMe = 'README.md'
const encoding = 'utf8'
const dirname = path.resolve('.').split('/').reverse()[0]
const gitUserName = 'MainShayne233'
const description = 'starting place for creating a react component'

const updatedReadMe = [
  `# ${dirname}`,
  'A cool React component',
]

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

  fs.writeFile(fileName, updatedPackageDotJson, encoding, (err) => {
    if (err) throw(err)
    console.log('Succesfully updated package.json')
  })

})
