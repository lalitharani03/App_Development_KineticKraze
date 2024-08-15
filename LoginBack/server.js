const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost", // Ensure this is correct
    user: "root",
    password: "Lalithaumkl_2004",
    database: "health"
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM register WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, data) => {
        if (err) {
            console.error("Login error: ", err);
            return res.status(500).json("Login Failed");
        }
        if (data.length > 0) {
            // Assuming your user table has an 'id' column
            const userId = data[0].customerid;
            console.log(userId);
            return res.json({ userId });
        } else {
            return res.status(401).json("Invalid credentials");
        }
    });
});


app.listen(8081, () => {
    console.log("Listening on port 8081...");
});
