## Full Project Recipe

* Nest JS
* Express
* MySQL + TypeORM

## Setup

```bash
$ git clone kdjbnv.git
$ cd social-network
$ npm i -g @nestjs/cli
$ npm install
```

## Start server

```bash
$ npm start
```
Open [Swagger](http://localhost:5000/swagger)
The input, output schema is provided in the swagger. You can easily test endpoints by entering arbitrary values into it.

## Quick Setup

* Run MySQL and create a database named `social_network`
* Open your terminal from root directory and paste `mysqldump -u username -p social_network < social.sql`
* Run server

## Test

```bash
$ npm run test
```

### Writing unit tests for this project

* For this project, nestjs provides specific and end-to-end testing. This can be found under `test` dirctory.
* All the `*.spec.ts` files from all directories will be executed once the test command is performed.
* The service layer maintains the business logic.
* So, we will test hit the API and match the results from the same service layer.
* For example, user is an entity. To test user routes, we will hit routes in `user.controller.ts` and execute the coresponding function from `user.service.ts` and match the results.
* The results should include the right status code, success/error message and data.
* The test is passed if the results are same in every manner, otherwise it fails.

## License

This project is [MIT licensed](LICENSE).
