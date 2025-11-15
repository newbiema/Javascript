const mysql = require ('mysql');

const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'js_db'

});


con.connect(function(err){
    if (err) throw err;
    console.log("terhubung")
});

module.exports = con;