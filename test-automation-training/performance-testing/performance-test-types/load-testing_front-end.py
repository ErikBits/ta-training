# check application abilty to function under anticipated user loads. find potential bottlenecks
# https://www.guru99.com/load-testing-tutorial.html


# can run these every day for example -> https://github.com/topics/performance-dashboard?o=desc&s=forks mb or make something quick myself

#Normal behavior measured i.e. every day for short amount of time

#flood database with entries to see its performance -> for backend


#test to see if it can sustain unexpected loads over long times

from locust import HttpUser, FastHttpUser, task


class LoadPageUser(HttpUser):

    host = 'http://192.168.1.216:3000'
    users = 100 # dont know how many users would be a lot
    spawn_rate = 10 # idem, dont know what spawn rate would be good
    run_time = '30m' # again, dont know what would be a good time

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


