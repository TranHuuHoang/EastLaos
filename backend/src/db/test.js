const {Session} = require("./session.js")
const {readFile} = require("fs")
const {promisify} = require("util")
const readFilePromise = promisify(readFile) 

const session = new Session();
const schemaFile = readFilePromise("./src/db/schema.sql");
const testFile = readFilePromise("./src/db/test.sql");

const test = async function() {
  const schemaData = await schemaFile;
  schemaData.toString().split(";").forEach(async function(line) {
    if (line.length > 0) {
      const out = await session.executeSQL(line);
      console.log(line)
      console.log(out);
    }
  });
}

test().catch(function(err) {
  throw err
})


console.log()


