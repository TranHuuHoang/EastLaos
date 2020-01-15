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
  async createStudent(id, email, password, salt) {
    try {
      await this.executeSQL(
        `INSERT INTO student
        VALUES (${id}, "${email}", "${password}", "${salt}")`
      );
      return;
    } catch (e) {
      throw e;
    }
  }
  async deleteStudent(id) {
    try {
      await this.executeSQL(
        `DELETE FROM student
        WHERE id = ${id}`
      );
      return;
    } catch (e) {
      throw e;
    }
  }
  async updateStudentPassword(id, password, salt) {
    try {
      await this.executeSQL(
        `UPDATE student
        SET password = "${password}", salt = "${salt}"
        WHERE id = ${id}`
      );
      return;
    } catch (e) {
      throw e;
    }
  }
  async findStudentById(id) {
    try {
      const out = await this.executeSQL(
        `SELECT (id, email, password, salt)
        FROM student
        WHERE id = ${id}`
      );
      return {
        id: out[0][0],
        email: out[0][1],
        password: out[0][2],
        salt: out[0][3],
      };
    } catch (e) {
      throw e;
    }
  }
  async findStudentByEmail(email) {
    try {
      const out = await this.executeSQL(
        `SELECT (id, email, password, salt)
        FROM student
        WHERE email = "${email}"`
      );
      return {
        id: out[0][0],
        email: out[0][1],
        password: out[0][2],
        salt: out[0][3],
      };
    } catch (e) {
      throw e;
    }
  }
}

const dbSession = new Session()
module.exports = {dbSession};