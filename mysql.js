const mysql = require("mysql2");
const http  = require('http');


const conn = mysql.createConnection({
    host : "localhost", 
    user : "root",
    password: "sample#",
    database : "artemis"
})

conn.connect((err)=>{
    console.log("Atemis Activated");
})

http.createServer((req, res)=>{
    conn.query('Select * from space;', (err, result)=>{
        if (err) throw err;
        res.end(JSON.stringify(result));
    })
}).listen(3000);
// conn.query("create database artemis", (err)=>{
//     if (err) throw err;
//     console.log("Database created");
//     conn.query("use artemis", (err)=>{
//         if(err) throw err;
//         console.log("using artemis");
//         conn.query("create table space(id INT, aname varchar(20), age INT);", (err)=>{
//             if(err) throw err;
//             console.log("table created");
//             const values = [[1, 'Neil Armstrong', 38],
//                             [2, 'Buzz Aldrin', 39],
//                             [3, 'Yuri Gagarin', 34],
//                             [4, 'Rakesh Sharma', 35],
//                             [5, 'Kalpana Chawla', 40]];
//             conn.query("insert into space values?", [values], (err)=>{
//                 if (err) throw err;
//                 console.log("Inserted values");
//             })
//         })
//     })
// })