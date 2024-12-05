# Library Management API

This project is a Node.js and Express.js API for managing a library's books and users, including borrowing and returning books with ratings.

## Installation

1.  **Install project dependencies:**

    ```bash
    npm install
    ```
    Build
      ```bash
    npm run build
    ```

2.  **Start the database:**

    This project uses Docker Compose to set up the database. You can start the MySQL database by running the following command:

    ```bash
    docker-compose -f ./docker-test-db.yml up -d
    ```

    or use ./test-db/docker-test-db.sql

3.  **Configure database settings:**

    Set the database connection details in the `.env` file. This file should include:

      *  `sqlHost`: Hostname of the MySQL server.
      *  `sqlPort`: Port number of the MySQL server.
      *  `sqlDB`: Name of the database.
      *  `sqlUser`: Username for database connection.
      *  `sqlPass`: Password for database connection.

4.  **Start the application:**

    ```bash
    npm start
    ```