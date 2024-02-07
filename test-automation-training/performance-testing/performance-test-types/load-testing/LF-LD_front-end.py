
from locust import HttpUser, FastHttpUser, task


class LoadPageUser(HttpUser):

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


