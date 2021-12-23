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

// Prod Setup //

// const pool = new Pool({
//   connectionString: proConfig,
//   ssl: { rejectUnauthorized: false },
// });

// Dev Setup //

const pool = new Pool(devConfig);

module.exports = pool;
