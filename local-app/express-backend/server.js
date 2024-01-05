const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3002;


app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost' || process.env.DB_HOST, //NOTE: this might not work in my containerized setup anymore. change to mysql-container when building to be sure?
    user: 'testuser',
    password: 'testpw',
    database: 'ta_test_db'
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to databse:', err);
    } else {
        console.log('Connected to database');
        connection.release();
    }
});


//API endpoints
app.get('/api/products/get-all', (req, res) => {
    const query = 'SELECT * FROM Products';

    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});

app.post('/api/products/add-product', (req, res) => {

    const { productName } = req.body;

    //validate input
    if(!productName) {
        return res.status(400).json({ error: 'Product name is required' });
    }

    const query = 'INSERT INTO Products (name) VALUES (?)';

    db.query(query, [productName], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({ message: 'Product added succesfully', productId: results.insertId });
        }
    });
});


//start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});