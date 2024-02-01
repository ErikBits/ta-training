from locust import FastHttpUser


def post_login(client, credentials):
    return client.post('/api/user-login', json=credentials)

def get_products_all(client):
    return client.get('/api/products/get-all')

def put_product(client, product):
    return client.put('/api/products/add-product', json=product)

def get_user_details(client, user_id):
    return client.get(f'/api/users/details{user_id}')

def put_user_details(client, user_id, user_details):
    return client.put(f'/api/users/details/{user_id}', json=user_details)

def get_user(client, user_id):
    return client.get(f'/api/users/{user_id}')

def put_user(client, user):
    return client.put('/api/users/', json=user)