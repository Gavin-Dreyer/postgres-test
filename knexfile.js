require('dotenv').config()

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      filename: './dev.sqlite3'
    },
    migration: {
      directory: './data/migrations'
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migration: {
      directory: './data/migrations'
    },
    seeds: {
      directory: "./data/seeds"
    }
  }

};
