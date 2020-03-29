# trimmr :scissors: - simple URL trimmer
![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE) ![Travis (.com)](https://img.shields.io/travis/com/isakal/trimmr) [![GitHub issues](https://img.shields.io/github/issues/isakal/trimmr.svg)](https://github.com/isakal/trimmr/issues) ![GitHub last commit](https://img.shields.io/github/last-commit/isakal/trimmr) 

Trimmr is a simple URL trimmer for people. Paste in a long URL and forget about.


## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
What things do you need to install for trimmr to work:
- npm v6.1 or above
- [docker and docker compose](https://docker.com)
`Docker version 18.09.9`
`docker-compose version 1.23.2`
<br>

### Installing
To get this project running on your local machine, first clone the repo.
After you clone the repo, you will notice there is [.env.sample](./.env.sample) file. Docker-compose looks for `.env` file for its configuration specified in `docker-compose.yml`. 
Rename `.env.sample` to `.env` and edit default Mongo root user password. You can use that file for future configuration values.

To build images specified in `docker-compose.yml` use:
```sh
docker-compose build
```
*NOTE: you can append `--no-cache` to the end to build without using cached packages*
<br>

To spin up all the containers use:
```sh
docker-compose up
```
<br>

To gain a shell inside a container use:
```sh
docker exec -it containter_name bash
```
*Replace container_name with container_name specified in `docker-compose.yml` , e.g. trimmr_api.*
<br>

If you happen to change Mongo root password in `.env`, you are going to need to delete volume tied to MongoDB. To do that use:
```sh
rm -rf /docker/mongo
```
<br>
## Running tests
To be added :grin:


## Coding style
This project uses Eslint to use set of predefined rules. 
Main guideline to stick to is line length, which is set to 100.


## Built with
This project is made using following software:
- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [MongoDB](https://www.mongodb.com/) - document-based, distributed NoSQL database 
- [Docker](https://docker.com) - tool for OS-level virtualization to deliver software packaged as container
- [Express](https://expressjs.com/) - micro web-framework
- [Mongoose](https://mongoosejs.com/) - model based ODM for MongoDB
- [shortId](https://github.com/dylang/shortid) - short non-sequential url-friendly unique id generator

## Author

 **isakal**

* Twitter: [@saki\_squared](https://twitter.com/saki\_squared)
* Github: [@isakal](https://github.com/isakal)

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/isakal/trimmr/issues). 

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE)  for details.