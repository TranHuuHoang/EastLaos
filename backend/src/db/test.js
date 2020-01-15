const {Session} = require("./session.js")

const session = new Session();

const out = session.executeSQL("SELECT 1+1;")

out.then(function(value) {
  console.log(value);
})


console.log()


