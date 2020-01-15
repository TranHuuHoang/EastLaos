const {Session} = require("./session.js")
const {readFile} = require("fs")
const {promisify} = require("util")
const readFilePromise = promisify(readFile) 

const session = new Session();

const execFile = async function(filename) {
  const data = (await readFilePromise(filename)).toString().split(";");
  for (i in data) {
    const line = data[i];
    if (line.length > 0) {
      const out = await session.executeSQL(line);
      console.log(line);
      console.log(out);
    }
  }
};
const test = async function() {
  await execFile("./src/db/schema.sql");
  await execFile("./src/db/test.sql");
  console.log("Done!");
}

test();