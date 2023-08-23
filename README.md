## Description

This is the Trilobyte api gateway app.

## Installation

```bash
$ yarn install
```

## Running the app locally

First you will need to add the environmental variables. There is a env.txt file that can be use. Just delete the .txt extension
and add the required variables

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Deploying to remote development environment

This is done via Heroku. Just commit the code to the development branch.

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
