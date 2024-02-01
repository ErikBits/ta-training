from locust import HttpUser

def dashboard(client):
    return client.get("/")

def products(client):
    return client.get('/products')

def about(client):
    client.get('/about')

def login(client):
    client.get('/login')