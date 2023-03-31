var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "node_db"
});

var connection = con.connect(function(err) {
  if (err) throw err;
  //console.log("DB Connected!");
});

module.exports = con;