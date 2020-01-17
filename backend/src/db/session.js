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
  async deleteCourse(id = 0) {
    await this.executeSQL(
      `DELETE FROM course
      WHERE id = ${id}`
    );
  }
  async allCourse() {
    const out = await this.executeSQL(
      `SELECT id, code, name, info
      FROM course`
    );
    if (out.length >= 1) {
      return out.map(function(item) {
        return {id: item[0], code: item[1], name: item[2], info: item[3]};
      }) 
    } else {
      return undefined;
    }

  }
  async findCourseById(id = 0) {
    const out = await this.executeSQL(
      `SELECT id, code, name, info
      FROM course
      WHERE id = ${id}`
    );
    if (out.length >= 1) {
      return {
        id: out[0][0],
        code: out[0][1],
        name: out[0][2],
        info: out[0][3],
      };
    } else {
      return undefined;
    }
  }
  async findCourseByCode(code = "") {
    const out = await this.executeSQL(
      `SELECT id, code, name, info
      FROM course
      WHERE code = "${code}"`
    );
    if (out.length >= 1) {
      return {
        id: out[0][0],
        code: out[0][1],
        name: out[0][2],
        info: out[0][3],
      };
    } else {
      return undefined;
    }
  }
  // studentsubscription
  async createStudentSubscription(param = {studentId: 0, courseId: 0}) {
    const {studentId, courseId} = param;
    await this.executeSQL(
      `INSERT INTO studentsubscription
      VALUES (${studentId}, ${courseId})`
    );
  }
  async deleteStudentSubscription(param = {studentId: 0, courseId: 0}) {
    const {studentId, courseId} = param;
    await this.executeSQL(
      `DELETE FROM studentsubscription
      WHERE (studentId = ${studentId} AND courseId = ${courseId})`
    );
  }
  // tutorsubscription
  async createTutorSubscription(param = {tutorId: 0, courseId: 0}) {
    const {tutorId, courseId} = param;
    await this.executeSQL(
      `INSERT INTO tutorsubscription
      VALUES (${tutorId}, ${courseId})`
    );
  }
  async deleteTutorSubscription(param = {tutorId: 0, courseId: 0}) {
    const {tutorId, courseId} = param;
    await this.executeSQL(
      `DELETE FROM tutorsubscription
      WHERE (tutorId = ${tutorId} AND courseId = ${courseId})`
    );
  }
  // studentmatch
  async createStudentMatch(param = {studentId: 0, courseId: 0}) {
    const {studentId, courseId} = param;
    await this.executeSQL(
      `INSERT INTO studentmatch
      VALUES (${studentId}, ${courseId})`
    );
  }
  async deleteStudentMatch(param = {studentId: 0, courseId: 0}) {
    const {studentId, courseId} = param;
    await this.executeSQL(
      `DELETE FROM studentmatch
      WHERE (studentId = ${studentId} AND courseId = ${courseId})`
    );
  }
  // tutormatch 
  async createTutorMatch(param = {tutorId: 0, courseId: 0}) {
    const {tutorId, courseId} = param;
    await this.executeSQL(
      `INSERT INTO tutormatch
      VALUES (${tutorId}, ${courseId})`
    );
  }
  async deleteTutorMatch(param = {tutorId: 0, courseId: 0}) {
    const {tutorId, courseId} = param;
    await this.executeSQL(
      `DELETE FROM tutormatch
      WHERE (tutorId = ${tutorId} AND courseId = ${courseId})`
    );
  }
  // matching
  async allMatchingRequest() {
    const studentMatches = await this.executeSQL(
      `SELECT studentId, courseId
      FROM studentmatch`
    );
    const tutorMatches = await this.executeSQL(
      `SELECT tutorId, courseId
      FROM tutormatch`
    );
    const out1 = studentMatches.map(function(item) {
      return {studentId: item[0], courseId: item[1]};
    });
    const out2 = tutorMatches.map(function(item) {
      return {tutorId: item[0], courseId: item[1]};
    });
    return {studentMatches: out1, tutorMatches: out2};
  }
}

const dbSession = new Session()
module.exports = {dbSession};