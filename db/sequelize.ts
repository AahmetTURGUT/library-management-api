import { Sequelize } from 'sequelize';

const dbConfig = new Sequelize({
  host: process.env.sqlHost,
  port: parseInt(process.env.sqlPort, 10),
  database: process.env.sqlDB,
  username: process.env.sqlUser,
  password: process.env.sqlPass,
  dialect: 'mysql'
});

export = dbConfig;
