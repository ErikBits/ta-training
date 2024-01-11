const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const bcrypt = require('bcrypt');

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

        // const passwordMatch = await bcrypt.compare(password, user.password); //doesnt work without password encryption. need to hash in db for this to work.
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

    const query = `
        INSERT INTO UserDetails (user_id, gender, address, country, postal_code)
        VALUES (?, ?, ?, ?, ?)
        ON DUPLICATE KEY UPDATE
            gender = VALUES(gender),
            address = VALUES(address),
            country = VALUES(country),
            postal_code = VALUES(postal_code)
    `;

    db.query(query, [user_id, gender, address, country, postal_code], (err, result) => {
        if (err) {
            console.error('Error updating or inserting user details', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json({ success: true, message: 'User details updated or created succesfully' });
        }
    });
});


//start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});