var fs = require("fs");

var app = "./app";

var res = "./app/res";
var fonts = "./app/res/fonts";
var images = "./app/res/images";

var src = "./app/src";
var component = "./app/src/components";
var scene = "./app/src/scenes";

fs.mkdirSync(app);

fs.mkdirSync(res);
fs.mkdirSync(fonts);
fs.mkdirSync(images);

fs.mkdirSync(src);
fs.mkdirSync(component);
fs.mkdirSync(scene);
console.log("All folders are created successfully.");

var defaultcolors =
  "const colors = {\n\ttitle: '#00B75D',\n\ttext: '#0C222B',\n\t button: '#036675'\n\t} \nexport default colors";

fs.writeFile("./app/res/colors.js", defaultcolors, err => {
  if (err) throw err;
  console.log("colors file created");
});

fs.writeFile("./app/res/fonts.js", "//fonts", err => {
  if (err) throw err;
  console.log("fonts  file created");
});

fs.writeFile("./app/res/images.js", "//images", err => {
  if (err) throw err;
  console.log("images file created");
});

fs.writeFile("./app/res/strings.js", "//strings", err => {
  if (err) throw err;
  console.log("strings file created");
});

fs.writeFile("./app/src/Styles.js", "//styles", err => {
  if (err) throw err;
  console.log("Styles file created");
});

Rimports =
  "import colors from '../res/colors'\nimport fonts from '../res/fonts'\nimport images from '../res/images'\nimport strings from '../res/strings'\nconst R = {\n\tcolors,\n\tfonts,\n\timages,\n\tstrings\n\t}\nexport default R";

fs.writeFile("./app/src/R.js", Rimports, err => {
  if (err) throw err;
  console.log("R file created");
});

var content = "sdk.dir = /home/webwerks/Android/Sdk";

fs.writeFile(
  "./android/local.properties",
  "sdk.dir = /home/webwerks/Android/Sdk",
  err => {
    if (err) throw err;
    console.log("JDk Path Added");
  }
);
