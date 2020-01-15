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
    const out1 = await session.createStudent(1, "khanh1@test", "acscvasva", "cascfafas");
    console.log("createStudent", out1);
    const out2 = await session.createStudent(2, "khanh2@test", "acscvasva", "cascfafas");
    console.log("createStudent", out2);
    const out3 = await session.createStudent(3, "khanh3@test", "acscvasva", "cascfafas");
    console.log("createStudent", out3);
    const out4 = await session.createStudent(4, "khanh4@test", "acscvasva", "cascfafas");
    console.log("createStudent", out4);
    const out5 = await session.deleteStudent(2);
    console.log("deleteStudent", out5);
    const out6 = await session.updateStudentPassword(3, "casavsac", "cascasca");
    console.log("updateStudentPassword", out6);
    const out7 = await session.executeSQL("SELECT * FROM student");
    console.log(out7);
    const out8 = await session.findStudentById(3);
    console.log(out8);
  } catch (e) {
    console.log(e);
  }
  console.log("Done!");
}
test();