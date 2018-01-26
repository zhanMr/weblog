'use strict'

let mysql = require('mysql');

let conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123123',
    port: '3306',
    database: 'blog',
});

//conn.connect();

function query(sql){
    return new Promise((resolve, reject) =>{
        conn.query(sql, (err, result) => {
            if(!err){
                resolve(resolve(result));
            }else{
                reject(err);

            }
        })
    })
}

module.exports = query;