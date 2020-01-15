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
    return this.executeSQL(
      `INSERT INTO student
      VALUES (${id}, "${email}", "${password}", "${salt}")`
    );
  }
  async deleteStudent(id) {
    return this.executeSQL(
      `DELETE FROM student
      WHERE id = ${id}`
    )
  }
  async updateStudentPassword(id, password, salt) {
    return this.executeSQL(
      `UPDATE student
      SET password = "${password}", salt = "${salt}"
      WHERE id = ${id}`
    );
  }
  async findStudentById(id) {
    return this.executeSQL(
      `SELECT *
      FROM student
      WHERE id = ${id}`
    );
  }
  // tutor
  async createTutor(id, email, password, salt) {
    return this.executeSQL(
      `INSERT INTO tutor
      VALUES (${id}, "${email}", "${password}", "${salt}")`
    );
  }
  async deleteTutor(id) {
    return this.executeSQL(
      `DELETE FROM tutor
      WHERE id = ${id}`
    )
  }
  async updateTutorPassword(id, password, salt) {
    return this.executeSQL(
      `UPDATE tutor
      SET password = "${password}", salt = "${salt}"
      WHERE id = ${id}`
    );
  }
  async findTutorById(id) {
    return this.executeSQL(
      `SELECT *
      FROM student
      WHERE id = ${id}`
    );
  }
}

module.exports = {Session};