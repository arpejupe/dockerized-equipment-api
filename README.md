Dockerized Equipment API
=================================

Node.js REST API for demonstrating and testing containerized deployment of microservices into AWS cloud.

Features:
- basic CRUD operations for equipment resource
- open API documentation via [swagger-jsdoc]() and [swagger-ui-express]()
- routes mapping via [express-routes-mapper](https://github.com/aichbauer/express-routes-mapper)
- support for [sqlite](https://www.sqlite.org/), [mysql](https://www.mysql.com/), and [postgresql](https://www.postgresql.org/)
- environments for `development`, `testing`, and `production`
- linting via [eslint](https://github.com/eslint/eslint)
- integration tests running with [Jest](https://github.com/facebook/jest)
- built with [npm sripts](#npm-scripts)

[Aichbauers](https://github.com/aichbauer/express-rest-api-boilerplate) express rest api has been used as a base boilerplate.


## Table of Contents

- [Install & Use](#install-and-use)
- [Folder Structure](#folder-structure)

## Install and Use


## Folder Structure

This boilerplate has 4 main directories:

- api - for controllers, models, services, etc.
- config - for routes, database, etc.
- db - this is only a dir for the sqlite db, the default for NODE_ENV development
- test - using [Jest](https://github.com/facebook/jest)

## License
This project is licensed under the MIT license. For more information see `LICENSE.md`