const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '68.178.228.180',
    user: 'lottery',
    password: 'lottery@123',
    database: 'lottery'
});
   // "start": "pm2 start src/server.js"

export default connection;