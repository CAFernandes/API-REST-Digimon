import path from 'path';
module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'digiworld'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
  },
}