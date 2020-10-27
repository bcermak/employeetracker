const mysql = require("mysql");
const express = require("express");

const app = express();


const PORT = 8080;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Skylar-10",
    database: "employee_tracker_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });