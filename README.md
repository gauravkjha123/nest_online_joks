# nest_oneline_joke API

This is a backend api for user authentication and authorization and for get some random joke from chucknorris API.


## nest_oneline_joke Features

- Resister user
- Sign in user
- sign out user
- See user profile
- Get some random joke

## Installation Guide

To install all the dependences of the project, run the following command:

    git clone https://github.com/gauravkjha123/nest_online_joks.git
    npm install
- Create an .env file in your project root folder and add your variables. See .env.example for assistance.
- Create database as you set in .env file for typeORM connection.
- Run  `npm run start` to start the application.

## Usage

- Run  `npm run start` to start the application.
- Connect to the API using Postman on port 3000.

## API Endpoints

| HTTP Verbs | Endpoints                          | Action                                 |
| ---------- | -----------------------------------| -------------------------------------- |
| POST       | /api/users/signup                 | To sign up user                 |
| POST       | /api/users/login      | To sign in user  |
| GET     | /api/users/me             | To get user profile                   |
| POST     | /api/users/logout                | To sign out user                    |
| GET        |  /api/random-joke              | To get some random joke         |


## Tech stack
* NodeJS
* NestJs
* ExpressJS
* MYSQL
* TypeORM 