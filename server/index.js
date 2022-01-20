const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const cors = require('cors');
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

// Database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "silent84",
    database: "ldap_db"
});

db.connect((err, result) => {
    if (err) {
        console.log(err);
    }
    console.log("LDAP Database Connection Successful");
});

// CRUD Functions

// Get
app.get("/getUsers", (req, res) => {
    let sql = "SELECT * FROM ldap_db.user_info";
    db.query(sql, (err, result) => {
        if (err) {
            throw (err);
        }
        console.log(result);
        return res.send(result);
    });
});

// Post
app.post("addUser", (req, res) => {
    let sql = "INSERT INTO ldap_db.user_info SET ?";
    let post = {
        user_name: req.body.user_name,
        user_email: req.body.user_email
    };
    db.query(sql, post, (err, result) => {
        if (err) {
            throw (err);
        }
        console.log(result);
        return res.send(result)
    });
});

// Put/Update
app.put("/edit/:user_id", (req, res) => {
    let updateUserName = req.body.user_name;
    let updateUserEmail = req.body.user_email;
    let sql = `UPDATE ldap_db.user_info SET
    user_name = '${updateUserName}',
    user_email = '${updateUserEmail}'
        WHERE id = '${req.params.user_id}'`
    db.query(sql, (err, result) => {
        if (err) {
            throw (err);
        }
        console.log(result);
        return res.send(result);
    })
})

// Delete
app.delete("/delete/:user_id", (req, res) => {
    let sql = `DELETE FROM ldap_db.user_info WHERE id = '${req.params.user_id}'`
    db.query(sql, (err, result) => {
        if (err) {
            throw (err);
        }
        console.log(result);
        return res.send("Successfully removed user from database!")
    });
});

// Server Listen
app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`)
});