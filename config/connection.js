let mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    });
}

connection.connect(function () {
    console.log('connected to database with ID ' + connection.threadId);
})

module.exports = connection;