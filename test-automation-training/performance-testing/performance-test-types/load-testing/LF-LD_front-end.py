from locust import HttpUser, FastHttpUser, task


class LoadPageUser(HttpUser):


    ## TODO: figure out if this works
    # def on_start(self):
    #     # schedule tasks with increasing delays to spawn users gradually
    #     for i in range(10):
    #         self.spawn_later(self.send_request, delay=i * 5)  # adjust delay as needed

    # def spawn_some(self, users, delay=0):
    #     for _ in range(users):
    #         self.spawn_later(self.send_request, delay=delay)


    #alternatively:
    # https://docs.locust.io/en/stable/custom-load-shape.html#restricting-which-user-types-to-spawn-in-each-tick

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


