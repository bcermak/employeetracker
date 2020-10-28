const mysql = require("mysql");
const express = require("express");
const inquirer = require("inquirer");
require("console.table");

const util = require("util");

const app = express();


const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Skylar-10",
    database: "employee_tracker_db",
    tables: "department"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  connection.query = util.promisify(connection.query)
  

  module.exports = connection