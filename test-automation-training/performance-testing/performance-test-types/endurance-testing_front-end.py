#test to see if it can sustain unexpected loads over long times

from locust import HttpUser, FastHttpUser, task

import random

class EndurancePageUser(HttpUser):

    host = 'http://192.168.1.216:3000'
    users = 250 # dont know how many users would be a lot
    spawn_rate = 25 # idem, dont know what spawn rate would be good
    run_time = '1h30m' # again, dont know what would be a good time

    @task
    def dashboard(self):
        self.client.get("/")

    @task
    def products(self):
        self.client.get('/products')

    @task
    def about(self):
        self.client.get('/about')
    
    @task
    def login(self):
        self.client.get('/login')


