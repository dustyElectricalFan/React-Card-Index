const express = require("express");
const bacon  = express();
const port = 3000;
const mysql = require('mysql');
const cors = require('cors');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'blt'
});

connection.connect((err) => {if(err){return err;}});

bacon.use(cors());

bacon.get("/", (req,res) => {connection.query('SELECT * FROM `support`', (err,results) => {if(err) {return res.send(err)} 
else {return res.json({data: results})} })});

bacon.get("/search", (req,res) => res.send("results"));
bacon.listen(port, () => console.log(`BLTBLT ${port}`));