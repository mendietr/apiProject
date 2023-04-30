CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

show databases;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

show tables;

DESCRIBE employee; 

SELECT 1 + 1;

INSERT INTO employee VALUES
(1, 'joe', 1000),
(2, 'Henry', 2000),
(3, 'Sam', 2500),
(4, 'Max', 1500);

SELECT * FROM employee;

SELECT * FROM employee Where id = 1;

DELETE FROM employee WHERE ID = ;