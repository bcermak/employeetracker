DROP DATABASE IF EXISTS employee_tracker_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DEC,
  department_id INT,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  PRIMARY KEY (id)

);

INSERT INTO department (name)
VALUES ("Manager");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Brandon", "Cermak", "1234", "5678")
