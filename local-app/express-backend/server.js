const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

// import { validateUserDetails } from './helpers/validationHelpers.js';
const { validateUserDetails } = require('./helpers/validationHelpers.js');

const app = express();
const port = 3002;


app.use(cors());
app.use(express.json());

const dbHost = process.env.DB_HOST || 'localhost';

const db = mysql.createPool({
    // host: 'localhost' || process.env.DB_HOST, //NOTE: this might not work in my containerized setup anymore. change to mysql-container when building to be sure?
    host: dbHost,
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

const findUserByUsername = async (username) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Users WHERE username = ?', [username], (err, results) => {
            if(err) {
                reject(err);
            } else {
                resolve(results[0]);
            }
        });
    });
};

app.post('/api/user-login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await findUserByUsername(username);

        if(!user) {
            return res.status(401).json({ error: 'User does not exist' });
        }

        // not hashing passwords since security is irrelevant for this
        const passwordMatch = await (password === user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Password does not match' });
        }

        // DUMMY TOKEN - dont think there is a need to replace this with jwt in this app
        const token = 'token12';

        res.json({ 
            token: token,
            user_id: user.id
        });


    } catch (error) {
        console.error('Login failed:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

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

app.put('/api/products/add-product', (req, res) => {

    const { productName, amount_in_stock } = req.body;

    //validate input
    if(!productName) {
        return res.status(400).json({ error: 'Product name is required' });
    }

    const query = 'INSERT INTO Products (name, amount_in_stock) VALUES (?, ?)';

    db.query(query, [productName, amount_in_stock], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({ message: 'Product added succesfully', productId: results.insertId });
        }
    });
});

app.get(`/api/users/details/:id`, (req, res) => {

    const user_id = req.params.id;
    const query = 'SELECT * FROM UserDetails WHERE user_id = ?';

    db.query(query, [user_id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        } else if (0 === results.length) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(results);
        }
    });
});

app.put('/api/users/details/:id', (req, res) => {

    const user_id = req.params.id;
    const { gender, address, country, postal_code } = req.body;

    const userDetailValidation = validateUserDetails(user_id, req.body);
    if (!userDetailValidation['status']) {
        return res.status(400).json({ error: userDetailValidation['error_message']});
    };

    const query = `
        INSERT INTO UserDetails (user_id, gender, address, country, postal_code)
        VALUES (?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
            gender = VALUES(gender),
            address = VALUES(address),
            country = VALUES(country),
            postal_code = VALUES(postal_code)
    `;

    db.query(query, [user_id, gender, address, country, postal_code], (err, results) => {
        if (err) {
            console.error('Error updating or inserting user details', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({ success: true, message: 'User details updated or created succesfully' });
        }
    });
});


app.get('/api/users/:id', (req, res) => {

    const user_id = req.params.id;

    const query = `SELECT * FROM Users WHERE id = ?`;

    db.query(query, [user_id], (err, results) => {
        if (err) {
            console.error('Error getting user.', err);
            res.status(500).json({ error: 'Internal server error.' });
        } else{
            res.json(results);
        }
    });
});


//start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});