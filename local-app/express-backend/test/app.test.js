const supertest = require('supertest');
const app = require('../server.js');
const assert = require('assert');

const request = supertest(app);

//NOTE: not using assertion library as I cant get it to work.
// TODO: Mock mysql server

describe('Product endpoints', () => {
    it('Should return proper products and status 200 when accessings all products endpoint', async () => {
        const res = await request.get('/api/products/get-all')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8');

            assert.strictEqual(res.body instanceof Array, true);

            const products = await res.body;
            assert(products.length > 0);
            assert(products[0]['id'] != null);
            assert(products[0]['name'] != null);
            assert(products[0]['amount_in_stock'] != null);
    });

    it('Should be able to add a product when sending valid details', async () => {

        const product = { 
            productName: 'Pencil',
            amount_in_stock: 100
        }


        const res = await request.put('/api/products/add-product')
            .send(product)
            .expect(200);

        
        const body = await res.body;
        assert(body['message'] == 'Product added succesfully');
        assert(body['productId'] > 10);
    });

    //how many differentations of this should I do?
    it('Should return 400 when sending invalid details', async () => {
        const invalidProduct = {
            
        };

        const res = await request.put('/api/products/add-product')
            .send(invalidProduct)
            .expect(400);

        const body = await res.body;
        assert(body['error'] == 'Product name is required');
    });
});

describe('Base user endpoint', () => {
    it('Should return a user based when given a valid id', async () => {
        const res = await request.get('/api/users/1')
            .expect(200);

        const user = await res.body;
        assert(user[0]['id'] == 1);
        assert(user[0]['username'] == 'admin');
        assert(user[0]['is_admin'] == 1);

    })
})

describe('User details endpoint', () => {
    it('Should get user details based on id', async () => {
        const res = await request.get('/api/users/details/1')
            .expect(200);

        const user = await res.body;
        assert(user[0]['id'] == 1);
        assert(user[0]['user_id'] == 1);
        assert(user[0]['gender'] > 0 && user[0]['gender'] < 4);
        assert(user[0]['address'] != null);
        assert(user[0]['country'] > 0 && user[0]['country'] < 4);
        assert(user[0]['postal_code'] != null);
    });

    it('Should succeed on updating or posting valid user details', async () => {

        const validUserDetails = {
            gender: 1,
            address: 'Laan 1',
            country: 1,
            postal_code: '1234AB'
        };

        const res = await request.put('/api/users/details/1')
            .send(validUserDetails)
            .expect(200);

        const body = await res.body;
        assert(body['success'] == true);
        assert(body['message'] == 'User details updated or created succesfully');
    });

    it('Should fail when posting invalid user details', async () => {
        const invalidUserDetails = {
            gender: 'string'
        };

        const res = await request.put('/api/users/details/1')
            .send(invalidUserDetails)
            .expect(400);

        const body = res.body;
        assert(body['error'] == 'Gender input out of bounds or non-numeric.');

    });
});


describe('Login Functionality',  () => {
    it('should return succeed when logging in with valid credentials', async () => {
        const credentials = {
            username: 'admin', 
            password: 'a'
        }
        
        const res = await request.post('/api/user-login')
            .send(credentials)
            .expect(200);

        const body = await res.body;
        assert(body['token'] == 'token12');
    });
});