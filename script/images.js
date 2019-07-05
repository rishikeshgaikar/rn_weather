const fs = require('fs')

const imageFileNames = () => {
  const array = fs
    .readdirSync('app/res/images')
    .filter((file) => {
      return file.endsWith('.png')
    })
    .map((file) => {
      return file.replace('@2x.png', '').replace('@3x.png', '')
    })
    
return Array.from(new Set(array))
}

const generate = () => {
  let properties = imageFileNames()
    .map((name) => {
     var shortname = name.split("."); 
     var testname = shortname[0]; 
      return `${testname}: require('./images/${testname}.png')`
    })
    .join(',\n  ')
    
const string = `const images = {
  ${properties}
}

export default images
`

fs.writeFileSync('app/res/images.js', string, 'utf8')
}

generate()
console.log('All images imported successfully.');