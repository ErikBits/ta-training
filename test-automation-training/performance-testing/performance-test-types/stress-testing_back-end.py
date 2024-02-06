from locust import HttpUser, task, FastHttpUser

class StressPostRequestsUser(FastHttpUser):
    
    host = 'http://192.168.1.216:3002'
    users = 12500 #  more users since there is less overhead
    spawn_rate = 1250
    run_time = '30m'


    @task
    def post_login(self):
        credentials = {
            'username': 'admin',
            'password': 'a'
        }
        res = self.client.post('/api/user-login', json=credentials)
        # assert self.validate_status(res)

    @task
    def get_products_all(self):
        # with self.client.get('/api/products/get-all') as res:
            # assert self.validate_status(res)
        # res = 
        # assert self.validate_status(res)
        self.client.get('/api/products/get-all')
    
    @task
    def put_product(self):
        product = {
            'productName': 'asdf',
            'amount_in_stock': random.randint(0, 100)
        }
        res = self.client.put('/api/products/add-product', json=product)
        # assert self.validate_status(res)
    
    @task
    def get_user_details(self):
        res = self.client.get('/api/users/details/1')
        # assert self.validate_status(res)

    @task
    def put_user_details(self):
        user_details = {
            'gender': 1,
            'address': 'Straat 1',
            'country': 1,
            'postal_code': '9999AX'
        }
        res = self.client.put('/api/users/details/1', json=user_details)
        # assert self.validate_status(res)

    @task
    def get_user(self):
        # res = self.client.get('/api/users/1')
        # assert self.validate_status(res)
        self.client.get('/api/users/1')

