const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'lab-db.cfc4m46kusw7.us-east-2.rds.amazonaws.com',  
    user: 'admin',      
    password: 'Aa123456',  
    database: 'lb-db'  
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/', (req, res) => {
    db.query('SELECT "Hello Commit, My Name Is Bar Zviely" AS message', (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Database query error');
            return;
        }
        res.send(result[0].message);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

