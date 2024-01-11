-- Create a database using `MYSQL_DATABASE` placeholder
CREATE DATABASE IF NOT EXISTS ta_test_db;
USE ta_test_db;

CREATE TABLE IF NOT EXISTS `Products` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(255) NOT NULL,
  `amount_in_stock` INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS `Users` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `username` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `is_admin` BOOL NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS `UserDetails` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT,
  `gender` TINYINT,
  `address` VARCHAR(255),
  `country` TINYINT, 
  `postal_code` VARCHAR (255),
  UNIQUE KEY (`user_id`),
  FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`)
);

-- Insert test data
INSERT INTO `Products` (`name`, `amount_in_stock`) VALUES 
  ('Drill', 1),
  ('Duct Tape', 2),
  ('Hammer', 2),
  ('Saw', 10),
  ('Safety Goggles', 0),
  ('Saw Premium', 1),
  ('Workbench', 1),
  ('Screwdriver', 5),
  ('Measuring Tape', 50);

  INSERT INTO `Users` (`username`, `password`, `is_admin`) VALUES
    ('admin', 'a', 1);

  SET @user_id = LAST_INSERT_ID();

  INSERT INTO `UserDetails` (`user_id`, `gender`, `address`, `country`, `postal_code`)
  VALUES (@user_id, 1, 'Laan 1', 1, '1234AB');

  INSERT INTO `Users` (`username`, `password`, `is_admin`) VALUES
    ('John Doe', 'password', 0);

    SET @user_id = LAST_INSERT_ID();

  INSERT INTO `UserDetails` (`user_id`, `gender`, `address`, `country`, `postal_code`)
  VALUES (@user_id, 2, 'Straat 2', 2, '9999XX');

