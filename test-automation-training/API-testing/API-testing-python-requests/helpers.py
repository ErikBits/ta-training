import requests

class API_endpoints():
    def __init__(self, base_url):
        self.base_url = base_url

    def login(self, username, password):
        res = requests.post(self.base_url + '/user-login', json={'username': username, 'password': password})
        return res.status_code, res.json()

    def get_products(self):
        res = requests.get(self.base_url + '/products/get-all')
        return res.status_code, res.json()

    def add_product(self, product_name, product_quantity):
        res = requests.put(self.base_url + '/products/add-product', json={'productName': product_name, 'amount_in_stock': product_quantity})
        return res.status_code, res.json()

    def get_user_details_by_id(self, user_id):
        res = requests.get(self.base_url + f'/users/details/{user_id}')
        return res.status_code, res.json()

    def update_user_details(self, user_id, gender, address, country, postal_code):
        data = {
            'gender': gender,
            'address': address,
            'country': country,
            'postal_code': postal_code
        }
        res = requests.put(self.base_url + f'/users/details/{user_id}', json=data)
        return res.status_code, res.json()

    def get_user_by_id(self, user_id):
        res = requests.get(self.base_url + f'/users/{user_id}')
        return res.status_code, res.json()