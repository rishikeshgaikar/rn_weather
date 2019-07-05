const fs = require("fs");

const ScenesIndexMaker = () => {
  const array = fs.readdirSync("app/src/components").map(file => {
    return file.replace(".js", "");
  });

  return Array.from(new Set(array));
};

const generate = () => {
  const properties = ScenesIndexMaker()
    .map(name => {
      const key = name.replace(/\s/g, "");
      return `import ${key} from('./${key}')`;
    })
    .join(";\n  ");

  const testproperties = ScenesIndexMaker().map(name => {
    const testkey = name.replace(/\s/g, "");
    return `${testkey}`;
  });

  const scenes = `${properties}
  \n export default {${testproperties},}`;
  fs.writeFileSync("app/src/components/index.js", scenes, "utf8");
};

generate();
console.log("All Components Imported!");
