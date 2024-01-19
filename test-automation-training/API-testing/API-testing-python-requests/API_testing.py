from helpers import API_endpoints
import random

base_url = 'http://localhost:3002/api'
api = API_endpoints(base_url)

# test all functions and see what they do

print(api.login('admin', 'a'))
print(api.get_products())
print(api.add_product('Lawnmower', 10))
print(api.get_user_by_id(1))


user_details_res = api.get_user_details_by_id(2)
print(user_details_res)
user_details_data = user_details_res[1][0]
user_details_data.pop('id')
user_details_data.pop('user_id')

user_details_data['address'] = 'Straat ' + str(random.randint(1, 100))

#what happens if i dont fill all fields? they just become null?
print(api.update_user_details(2, user_details_data['gender'], user_details_data['address'], user_details_data['country'], user_details_data['postal_code']))
