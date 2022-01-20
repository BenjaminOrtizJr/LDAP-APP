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
    console.log("LDAP Database Connection Successful!");
});

// CRUD Functions

// Get
// Post
// Put/Update
// Delete

// Server Listen
app.listen(PORT, () => {
    console.log(`Running server on port ${PORT}`)
});