var mysql = require("mysql2");
var pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  username: "root",
  password: "johnahn",
  database: "myapp",
});

exports.pool = pool;
