from locust import FastHttpUser, task
import string
import random

from '../helpers/backend-request-helpers.py' import put_user, put_user_details, put_product

# need to make a flood test for the frontend products because it grabs all products
class FloodedDbUser(FastHttpUser):



    #flood db
    amount_of_users = 500
    amount_of_products = 3000

    def flood_db_user(self, amount_of_users):
        for i in range(amount_of_users):
            creds = {
                'username': self.generate_random_string(10),
                'password': self.generate_random_string(8),
                'is_admin': random.randint(0, 1)
            }
            res = self.put_user(self.client, creds)

            user_id = res['user_id']

            details = {
                'gender': random.randint(0, 3),
                'address': self.generate_random_string(8),
                'country': random.randint(0, 3),
                'postal_code': self.generate_random_string(6)
            }
            self.put_user_details(self.client, user_id, details)
        
    def flood_db_products(self, amount_of_products):
        for i in range(amount_of_products):
            product = {
                'name': self.generate_random_string(10),
                'amount_in_stock': random.randint(0,100)
            }
        
            self.put_product(self.client, product)


    def generate_random_string(string_length):
        letters = string.ascii_lowercase
        return ''.join(random.choice(letters) for i in range(string_length))
    

    flood_db_user(amount_of_users)
    flood_db_products(amount_of_products)


    #need to know when db is filled so i know how long it should be
    #not really that big of an issue i guess if query is made to non-existant db entry
    user_counter = 0
    @task
    def get_user(self):
        self.client.get(f'/api/users/{self.user_counter}')
        self.user_counter += 1
    
    @task 
    def get_user_detail(self):
        self.client.get(f'/api/users/details/{self.user_counter}')
    
    #since this is what i use  ill only query all db entries for the products table - maybe add one to get all users or something later
    @task
    def get_products_all(self):
        self.client(f'/api/products/get-all/')
        






