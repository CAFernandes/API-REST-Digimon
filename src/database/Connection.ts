import knex from 'knex';
import * as dotenv from "dotenv";
dotenv.config();
const Connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
    database: process.env.BD_DATABASE,
  },
})

export default Connection;