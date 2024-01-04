# About # 
This is an attempt to show the basics of test automation on varying test levels. It uses a container to ensure that all dependencies are installed and configured. The container runs on linux, hence basic linux commands are helpful to understand. Any time I think a command is helpful to know I will let you know.

Note: this is my first time creating and using a containerized development environment. If you have any feedback or notice inconsistencies please inform me.

# Installation # 

## Requirements ##

### Node ###
Check via `node --version`

### Docker ###
Install docker client via 

### IDE ### 
Install and use visual studio code: https://code.visualstudio.com

#### VS Code Plugins ####
- Docker Extension (?)


## Installation Procedures ##

### Repository ###
Respository: 
Fork and then clone the repository locally so you can make alterations along the way.


## Working with material ##
Run containers
` docker-compose up -d`

Stop containers
` docker ps `
` docker stop $containerName`

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

## Container ##
Find container IP:

``` docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container_id> ```

Errors may be caused by a full root partition. (after 2 days of trying cleared 16gb - good idea to keep doing this). Errors include 'x package not signed' apparently.

Removes all containers so be careful:

`docker system prune --force`

`docker volume prune --force`

Alternatively run `apt clean`. Havent tried the effect of this.