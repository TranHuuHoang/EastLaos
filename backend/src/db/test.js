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

mysqlx.getSession(options).then(function(session) {
  console.log(session.inspect());

  session.sql("DROP TABLE IF EXISTS TableA;").execute().then(function(result) {
    console.log(result.fetchAll())
  }).catch(error)

  session.sql("CREATE TABLE TableA (id int(32));").execute().then(function(result) {
    console.log(result.fetchAll())
  }).catch(error)

  session.sql(`INSERT INTO TableA(id) VALUES (${2});`).execute().then(function(result) {
    console.log(result.fetchAll())
  }).catch(error)

  session.sql(`INSERT INTO TableA(id) VALUES (${3});`).execute().then(function(result) {
    console.log(result.fetchAll())
  }).catch(error)

  session.sql(`SELECT * FROM TableA;`).execute().then(function(result) {
    console.log(result.fetchAll())
  }).catch(error)

  session.sql(`DROP TABLE IF EXISTS TableA;`).execute().then(function(result) {
    console.log(result.fetchAll())
  }).catch(error)

  session.close()
}).catch(error);
