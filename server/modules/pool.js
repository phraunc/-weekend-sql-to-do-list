const pg = require("pg");
const express = require('express');
const Pool =  pg.Pool;//had const Pool = new pg.Pool

if (process.env.DATABASE_URL) {
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
} else {
  pool = new pg.Pool({
    database: "weekend-to-do-app",
    host: "localhost",
    port: 5432,
    idleTimeoutMillis: 30000
  })
}

module.exports = pool;
