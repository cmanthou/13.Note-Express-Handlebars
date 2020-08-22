var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "yourRootPassword",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("Error: " + err.stack);
        return;
    }
    console.log("Conected as id " + connection.threadId);
});

module.exports = connection;