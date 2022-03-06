const sqlite = {
  client: 'sqlite',
  connection: {
    filename: '.tmp/data.db',
  },
  useNullAsDefault: true,
};

const postgres = {
  client: 'postgres',
  connection: {
    database: 'ok2ship',
    user: 'wongmwc',
    password: '123',
    port: 5432,
    host: 'localhost',
  },
};

const mysql = {
  client: 'mysql',
  connection: {
    database: 'ok2ship',
    user: 'ok2ship',
    password: 'ok2ship',
    port: 3306,
    host: 'localhost',
  },
};

const db = {
  mysql,
  sqlite,
  postgres,
};

module.exports = {
  //connection: process.env.DB ? db[process.env.DB] || db.sqlite : db.sqlite,
  connection: db.postgres,
};
