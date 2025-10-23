"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
require('dotenv').config();
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, "/../config/config.json"))[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  const database = process.env.DB_NAME || config.database;
  const username = process.env.DB_USER || config.username;
  const password = process.env.DB_PASS ?? config.password;
  const host = process.env.DB_HOST || config.host;
  const port = process.env.DB_PORT ? Number(process.env.DB_PORT) : config.port;
  const dialect = process.env.DB_DIALECT || config.dialect;

  sequelize = new Sequelize(database, username, password, {
    ...config,
    host,
    port,
    dialect,
  });
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    // Require each model and initialize it with (sequelize, DataTypes)
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;