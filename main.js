const con = require('./services/db.js');
const prompt = require("prompt-sync")();

function createData(){
    const nama = prompt("Nama :");
    const alamat = prompt("Alamat : ");
    const no_hp = prompt ("No HP : ");

    let sql = `INSERT INTO user (nama,alamat,no_hp) VALUES('${nama}','${alamat}','${no_hp}')`;

    con.query(sql,function(err){
        if(err){
            throw err;
        }
        else{
            console.log('data berhasil di tambahkan')
        }
    });
}

createData();

