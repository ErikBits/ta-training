-- Create a database using `MYSQL_DATABASE` placeholder
CREATE DATABASE IF NOT EXISTS ta_test_db;
USE ta_test_db;

CREATE TABLE IF NOT EXISTS `Products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL
);

-- Insert test data
INSERT INTO `Products` (`name`) VALUES ('Drill'),('Duct Tape');
-- UNLOCK TABLES;

