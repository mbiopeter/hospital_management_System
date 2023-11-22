CREATE SCHEMA IF NOT EXISTS hospital;

USE hospital;

CREATE TABLE users(id int auto_increment PRIMARY KEY, Username VARCHAR(30) NOT NULL,FirstName VARCHAR(30),LastName varchar(30),TokenNumber INT, MobileNumber INT NOT NULL, Email VARCHAR(30) NOT NULL,Password VARCHAR(200) NOT NULL, RegDate DateTime NOT NULL,Login DateTime,LogOut DateTime);
