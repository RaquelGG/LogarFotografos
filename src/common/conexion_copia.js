let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'db5000240076.hosting-data.io',
    user: 'dbu97011',
    password: 'Tecnologias_web1',
    database: 'dbs234431'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    console.log('Se ha establecido la conexión al servidor MySQL.');
});