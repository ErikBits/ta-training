from locust import FastHttpUser, task
import string
import random

from '../helpers/backend-request-helpers.py' import put_user, put_user_details, put_product



# not sure if i shoudl go for body sizes which do not get accepted
# or just use the biggest valid body sizes
# guess ill incorporate both

# not sure if i should go through the trouble of generating random strings but oh well


class EntityTooLargeUser(FastHttpUser):

    host = 'http://locahost:3002'
    users = 100
    spawn_rate = 10
    run_time = '10m'

    #idk how big these bodies should be
    string_body_character_amount = 10**2
    number_body_size = 10**5

    def generate_random_string(string_length):
        letters = string.ascii_lowercase
        return ''.join(random.choice(letters) for i in range(string_length))

    @task
    def post_user_login(self):
        credentials = {
            'username': self.generate_random_string(self.string_body_character_amount),
            'password': self.generate_random_string(self.string_body_character_amount)
        }
        self.client.post('/api/user-login')

    @task
    def put_user(self):
        user = {
            'username': self.generate_random_string(self.string_body_character_amount),
            'password': self.generate_random_string(self.string_body_character_amount),
            'is_admin': self.number_body_size
        }
        self.client.put('/api/users', json=user)

    @task
    def put_user_details(self):
        user_details = {
            'user_id': self.number_body_size,
            'gender': self.number_body_size,
            'address': self.generate_random_string(self.string_body_character_amount),
            'country': self.number_body_size,
            'postal_code': self.generate_random_string(self.string_body_character_amount),
        }
        self.client.put('/api/users/details', json=user_details)

    @task
    def put_product(self):
        product = {
            'productName': self.generate_random_string(self.string_body_character_amount),
            'amount_in_stock': self.number_body_size
        }
        self.client.put('/api/products/add-product', json=product)

    


class MaxInputBodyUser(FastHttpUser):

    #NOTE: not caring about success or failure of the response here. Just the max input for the databse so i dont get 413
    # need to figure out if there are differences between successful requests and unsuccesful. This can have implicateions and maybe test ahs to be split up

    host = 'http://locahost:3002'
    users = 250
    spawn_rate = 25
    run_time = '10m'

    def generate_random_string(string_length):
        letters = string.ascii_lowercase
        return ''.join(random.choice(letters) for i in range(string_length))
    

    max_username = 255 #VARCHAR 255
    max_password = 255 #VARCHAR 255
    @task
    def put_user(self):
        credentials = {
            'username': self.generate_random_string(self.max_username),
            'password': self.generate_random_string(self.max_password)
        }
        self.client.put('/api/users', json=credentials)


    @task
    def post_user_login(self):
        credentials = {
            'username': self.generate_random_string(self.max_username),
            'password': self.generate_random_string(self.max_password)
        }
        self.client.post('/api/user-login', json=credentials)
    

    max_user_id = 2,147,483,647 # MySQL int
    max_gender = 127 #MySQL TinyInt
    max_address = 255 #VARCHAR 255
    max_country = 127 #MySQL TinyInt
    max_postal_code = 255 #VARCHAR 255
    @task
    def put_user_details(self):
        user_details = {
            'user_id': random.randint(0, 2147483647),
            'gender': random.randint(0, 127),
            'address': self.generate_random_string(self.max_address),
            'country': random.randint(0, 127),
            'postal_code': self.generate_random_string(self.max_postal_code)
        }
        self.client.put('/api/users/details', json=user_details)
    

    max_product_name = 255 #VARCHAR 255
    max_amount_in_stock = 2,147,483,647 # MySQL int
    @task
    def put_product(self):
        product = {
            'productName': self.generate_random_string(self.max_product_name),
            'amount_in_stock': random.randint(0, 2,147,483,647)
        }
        self.client.put('/api/products/add-product', json=product)



