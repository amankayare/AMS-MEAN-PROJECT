-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ams
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ams
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ams` DEFAULT CHARACTER SET latin1 ;
USE `ams` ;

-- -----------------------------------------------------
-- Table `ams`.`faculty`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ams`.`faculty` (
  `faculty_id` INT(11) NOT NULL AUTO_INCREMENT,
  `first` VARCHAR(100) NOT NULL,
  `last` VARCHAR(40) NOT NULL,
  `employee_id` VARCHAR(100) NOT NULL,
  `email` VARCHAR(40) NOT NULL,
  `password` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`faculty_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `ams`.`module`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ams`.`module` (
  `module_id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `lecture_count` INT(11) NOT NULL,
  `faculty_name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`module_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `ams`.`students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ams`.`students` (
  `student_id` INT(11) NOT NULL AUTO_INCREMENT,
  `first` VARCHAR(100) NOT NULL,
  `last` VARCHAR(40) NOT NULL,
  `enrollment` VARCHAR(100) NOT NULL,
  `email` VARCHAR(40) NOT NULL,
  `password` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`student_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
