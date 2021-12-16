const Pool = require('pg').Pool;
require('dotenv').config();

const dbUser = process.env.PGUSER;
const dbPassword = process.env.PGPASSWORD;
const dbDatabase = process.env.PGDATABASE;
const dbPort = process.env.PGPORT;
const dbSSL = process.env.PGSSLMODE;

const devConfig = {
  user: dbUser,
  password: dbPassword,
  host: 'localhost',
  port: dbPort,
  database: dbDatabase,
  sslmode: dbSSL,
};

const proConfig = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === 'production' ? proConfig : devConfig,
  ssl: { rejectUnauthorized: false },
});

module.exports = pool;
