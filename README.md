### Setup the project

- Install all the dependencies by executing the following command:

  ```
  npm install
  ```

- In the root directory create a `.env` file and add the following env variables
  ```
  PORT=<port number of your choice>
  ```
  ex:
  ```
  PORT = 3000
  ```
- Go inside the `src` folder and execute the following command:
  ```
  npx sequelize init
  ```
- Inside the `src/config` folder create a file named as `config.json` and write the following code:

  ```
  {
  "development": {
  "username": "root",
  "password": null,
  "database": "database_development",
  "host": "127.0.0.1",
  "dialect": "mysql"
  },
  "test": {
  "username": "root",
  "password": null,
  "database": "database_test",
  "host": "127.0.0.1",
  "dialect": "mysql"
  },
  "production": {
  "username": "root",
  "password": null,
  "database": "database_production",
  "host": "127.0.0.1",
  "dialect": "mysql"
  }
  }

  ```

- If you are setting up your development environment, then write username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, postgres etc.
- If you are setting up test or prod environment, make sure you also replace the host with the hosted db url.

- To run the server execute

  ```
  npm run dev
  ```

- To create a new database, execute the following command

```
  npx sequelize create database
```

- To add any new model, execute the following command

  ```
  npx sequelize model:generate --name ModelName --attributes attributeName:string
  ```

- To make the migrations, execute the following command

  ```
  npx sequelize db:migrate
  ```

- To undo the migrations, execute the following command

```
  npx sequelize db:migrate:undo
```

- To create the seed file, execute the following command

```
  npx sequelize-cli seed:generate --name demo-file
```

- To add seeds to our table, execute the following command

```
  npx sequelize db:seed --seed 20250318111128-add-seats.js
```

- The endpoints to check API implementation

```
  API 1: wholesaler along with a list of retailers associated

    /api/v1/wholesalers/3

  API 2: Get a retailer who has single wholesaler

    /api/v1/retailers

  API 3: Total monthly turnover of each wholesaler for a complete year

    /api/v1/wholesalers/turnovers

  API 4: Max turnover of each wholesaler from a single retailer

    /api/v1/wholesalers/turnover/max/retailer

```
