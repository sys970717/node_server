const mysql = require('mysql')
var connect_info = {
    host: '127.0.0.1',
    port: '3306',
    user: 'test',
    password: 'test',
    database: 'spring_test'
}

const mysql_connect = {
    'conn': {},
    'info': connect_info,
    'create_connection': function() {
        return mysql.createConnection(this.info)
    }
}

module.exports = mysql_connect;
