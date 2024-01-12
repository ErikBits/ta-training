# About # 
This is an attempt to show the basics of test automation on varying test levels. It uses a container to ensure that all dependencies are installed and configured. The container runs on linux, hence basic linux commands are helpful to understand. Any time I think a command is helpful to know I will let you know.

Note: this is my first time creating and using a containerized development environment. If you have any feedback or notice inconsistencies please inform me.

# Installation # 

## Requirements ##
Installation procedures are all based on windows.

### git ###
Verify if git is installed via `git --version` in the command prompt.

If the program is not recognized, install the git bash terminal via: .

#### github ####
A github account is also required. This can be made here: .

### Node ###
Verify if node is installed via `node --version`. 

If node is not installed, you can install it via: .

### Docker ###
Install docker client via 

### IDE ### 
Install and use visual studio code: https://code.visualstudio.com

<!-- #### VS Code Plugins #### -->


## Installation Procedures ##

### Repository ###
Respository: 
Fork and then clone the repository locally so you can make alterations along the way.

Fork the repository in your browser. More information can be found here: .

After forking, copy the link of the repository by clicking the '' button and copying the https link ending with .git (we will not be dealing with ssh keys). 

Open a terminal and move toward the directory where you would like the project to reside. For example, if I want it to be in `C:/Users/Luuk/Documents/Programs`, depending on where I am currently (you can see it on the left of the terminal, or you can type `cd` to print the current working directory), I would type `cd Documents/Programs` (the windows command prompt autocompletes file and directory names when using tab). If the `Programs` directory does not exist yet you can type `mkdir Programs` and subsequently do `cd Programs`. Cd stands for change directory. 

We can now clone the repository via: 
`git clone <repository-url>.git`
Pasting in the terminal (especially linux terminals) can be done via right-clicking inside the terminal.

The repository should now be downloaded. When you type `dir` you can see all the given files and directories inside your current working directory. `cd` into the newly created directory and type `code .`. This will open the project inside Visual Studio Code. Now you are ready to begin!

## Working with material ##
Where possible I tried to implement workbooks which (should) make it easier to follow along and build on your programs incrementally. If not possible I am working with code comments to further outline the steps to be taken via code comments. 

### Mysql server container ###
Run containers
` docker-compose up -d`

Stop containers
` docker ps `
` docker stop <containerName>`

### Backend ### 
`cd local-app\express-backend`
`node express.js`

### Frontend ###
`cd local-app\react-frontend`
`npm start`

## Making alterations in the webapp ##
If you do decide to make alterations to the weball you need to rebuild the image. This can be done by going to the respective directory and building via
`docker build -t <image-name>:tag .`
Then adjust the docker-compose.yml file to reflect the new image. Rerun the compose file to reflect the changes.

As the database is basically the image with no other local files you need to run this as a docker container during development anyhow. Run the following command:

`docker-compose -f docker-compose-dev-mysql-only.yml up`

# Notes #


# Troubleshooting #

## MySQL database ##

Connect to mysql database from windows cli (mysql has to be added to path):
` mysql -h localhost -P 3306 -u testuser -p`. When prompted insert pw from .env file.

inspect user table mysql
```mysql -u {user} -p```
`
USE mysql;
SELECT user, host FROM user;`

Check if mysql is running
``` service mysql status ```

After update to the mysql database run in the same directory while the contianer is still running:
`docker-compose down -v`
Then run: 
`docker-compose -f ./docker-file/ up --build`

## Container ##
Find container IP:

``` docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container_id> ```

Errors may be caused by a full root partition. (after 2 days of trying cleared 16gb - good idea to keep doing this). Errors include 'x package not signed' apparently.

Removes all containers so be careful:

`docker system prune --force`

`docker volume prune --force`

Alternatively run `apt clean`. Havent tried the effect of this.