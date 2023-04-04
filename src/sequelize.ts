import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: 'woovi',
  dialect: 'postgres',
  username: 'postgres',
  password: 'Barretto14',
  host: 'localhost',
  port: 5432,
  models: [__dirname + '/models'],
  logging: false,
});
