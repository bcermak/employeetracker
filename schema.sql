DROP DATABASE IF EXISTS employee_tracker_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id)
  name VARCHAR(30),

);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  title VARCHAR(30),
  salary DEC,
  department_id INT,

);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,

);

