const mysqlx = require("@mysql/xdevapi")

const error = function(value) {
  throw value;
}

const options = {
  host: "localhost",
  user: "test",
  password: "EastLaos312#",
  schema: "EastLaos",
};

const Session = class {
  constructor() {
    this.session = mysqlx.getSession(options)
  }
  async executeSQL(text) {
    const session = await this.session;
    const result = await session.sql(text).execute();
    return result.fetchAll();
  }
  // student
  async createStudent(param = {id: 0, email: "", password: "", salt: ""}) {
    const {id, email, password, salt} = param;
    await this.executeSQL(
      `INSERT INTO student
      VALUES (${id}, "${email}", "${password}", "${salt}")`
    );
  }
  async deleteStudent(id) {
    await this.executeSQL(
      `DELETE FROM student
      WHERE id = ${id}`
    );
  }
  async updateStudentPassword(param = {id: 0, password: "", salt: ""}) {
    const {id, password, salt} = param;
    await this.executeSQL(
      `UPDATE student
      SET password = "${password}", salt = "${salt}"
      WHERE id = ${id}`
    );
  }
  async findStudentById(id) {
    const out = await this.executeSQL(
      `SELECT id, email, password, salt
      FROM student
      WHERE id = ${id}`
    );
    if (out.length >= 1) {
      return {
        id: out[0][0],
        email: out[0][1],
        password: out[0][2],
        salt: out[0][3],
      };
    } else {
      return undefined;
    }
  }
  async findStudentByEmail(email) {
    const out = await this.executeSQL(
      `SELECT id, email, password, salt
      FROM student
      WHERE email = "${email}"`
    );
    if (out.length >= 1) {
      return {
        id: out[0][0],
        email: out[0][1],
        password: out[0][2],
        salt: out[0][3],
      };
    } else {
      return undefined;
    }
  }
}

const dbSession = new Session()
module.exports = {dbSession};