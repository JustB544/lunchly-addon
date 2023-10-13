/** Database for lunchly */

const pg = require("pg");
require("dotenv").config();


const db = new pg.Client("postgresql:///lunchly");

db.connect();

module.exports = db;
