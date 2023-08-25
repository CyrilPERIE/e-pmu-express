create database IF NOT EXISTS expressapp; 
use expressapp;

create table IF NOT EXISTS essai(
id int auto_increment primary key,
value text,
valueInt int
);