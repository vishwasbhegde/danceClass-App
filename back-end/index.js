const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reactApp'
});
app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello world');
    const sqlSelect = "SELECT * FROM `user`";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});


app.post('/api/insert', (req, res) => {
    const { name, email, password } = req.body;
    const sqlInsert = "INSERT INTO user (user_name, user_email, user_password) VALUES (?, ?, ?)";
    db.query(sqlInsert, [name, email, password], (err, result) => {
        console.log(err);
        console.log(result);
        console.log('comng');
    });
});


app.listen(5001, () => {
    console.log('running on port 5001');
})