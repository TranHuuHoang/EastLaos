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
    try {
      const session = await this.session;
      const result = await session.sql(text).execute();
      return result.fetchAll();
    } catch (e) {
      error(e);
    }
  }

}

module.exports = {Session};