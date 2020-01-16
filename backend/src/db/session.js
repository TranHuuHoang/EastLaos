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
  async maxStudentId() {
    const out = await this.executeSQL(
      `SELECT MAX(id)
      FROM student;`
    )
    if (out.length >= 1) {
      return out[0][0];
    } else {
      return undefined;
    }
  }
  async createStudent(param = {id: 0, email: "", password: "", salt: ""}) {
    const {id, email, password, salt} = param;
    await this.executeSQL(
      `INSERT INTO student
      VALUES (${id}, "${email}", "${password}", "${salt}")`
    );
  }
  async deleteStudent(id = 0) {
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
  async findStudentById(id = 0) {
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
  async findStudentByEmail(email = "") {
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
  // tutor
  async maxTutorId() {
    const out = await this.executeSQL(
      `SELECT MAX(id)
      FROM tutor;`
    )
    if (out.length >= 1) {
      return out[0][0];
    } else {
      return undefined;
    }
  }
  async createTutor(param = {id: 0, email: "", password: "", salt: ""}) {
    const {id, email, password, salt} = param;
    await this.executeSQL(
      `INSERT INTO tutor
      VALUES (${id}, "${email}", "${password}", "${salt}")`
    );
  }
  async deleteTutor(id = 0) {
    await this.executeSQL(
      `DELETE FROM tutor
      WHERE id = ${id}`
    );
  }
  async updateTutorPassword(param = {id: 0, password: "", salt: ""}) {
    const {id, password, salt} = param;
    await this.executeSQL(
      `UPDATE tutor
      SET password = "${password}", salt = "${salt}"
      WHERE id = ${id}`
    );
  }
  async findTutorById(id = 0) {
    const out = await this.executeSQL(
      `SELECT id, email, password, salt
      FROM tutor
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
  async findTutorByEmail(email = "") {
    const out = await this.executeSQL(
      `SELECT id, email, password, salt
      FROM tutor
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
  // course
  async maxCourseId() {
    const out = await this.executeSQL(
      `SELECT MAX(id)
      FROM course;`
    )
    if (out.length >= 1) {
      return out[0][0];
    } else {
      return undefined;
    }
  }
  async createCourse(param = {id: 0, code: "", name: "", info: ""}) {
    const {id, code, name, info} = param;
    await this.executeSQL(
      `INSERT INTO course
      VALUES (${id}, "${code}", "${name}", "${info}")`
    );
  }
}

const dbSession = new Session()
module.exports = {dbSession};