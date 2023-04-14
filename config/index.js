const Pool = require("pg").Pool

const connection = new Pool({
  user: "postgres",
  host: "localhost",
  database: "my_todos_db",
  password: "viking123",
  port: 6969
})

module.exports = connection