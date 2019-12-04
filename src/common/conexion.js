let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'Tecnologias_web1',
    password: 'Tecnologias_web1',
    database: 'logarfotografos'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    console.log('Se ha establecido la conexión al servidor MySQL.');
});