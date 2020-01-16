const {dbSession: session} = require("./session.js")
const {readFile} = require("fs")
const {promisify} = require("util")
const readFilePromise = promisify(readFile) 

const execFile = async function(filename) {
  const data = (await readFilePromise(filename)).toString().split(";");
  for (i in data) {
    const line = data[i];
    if (line.length > 0) {
      try {
        const out = await session.executeSQL(line);
        console.log(line);
        console.log(out);
      } catch (e) {
        console.log(line);
        console.log(e.info)
      }
    }
  }
};
const test = async function() {
  try {
    await execFile("./src/db/schema.sql");
    session.createStudent({
      id: 1, 
      email: "casca",
      password: "cascas",
      salt: "cascas234",
    })
    session.findStudentById(2).then(function(value) {
      console.log(value)
    });
  } catch (e) {
    console.log(e);
  }
  console.log("Done!");
}
test();