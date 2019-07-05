const fs = require('fs')

const fontFileNames = () => {
  const array = fs.readdirSync('app/res/fonts')
    .map((file) => {
      return file.replace('.ttf', '')
    })
    
return Array.from(new Set(array))
}

const generate = () => {
  const properties = fontFileNames()
    .map((name) => {
      var testname = name.replace("-", "_");
      const key = testname.replace(/\s/g, '')
      return `${key}: '${name}'`
    })
    .join(',\n  ')
    
const string = `const fonts = {
  ${properties}
}

export default fonts
`
  fs.writeFileSync('app/res/fonts.js', string, 'utf8')
}

generate()
console.log('All fonts imported successfully.');