const {Session} = require("./session.js")
const {readFile} = require("fs")
const {promisify} = require("util")
const readFilePromise = promisify(readFile) 

const session = new Session();
const file = readFilePromise("./src/db/schema.sql")

const test = async function() {
  try {
    const filedata = await file;
    filedata.toString().split(";").forEach(async function(line) {
      const out = await session.executeSQL(line);
      console.log(line)
      console.log(out);
    });
  } catch (e) {
    return e
  }
}

test().then(function(data) {
}).catch(function(err) {
})


console.log()


