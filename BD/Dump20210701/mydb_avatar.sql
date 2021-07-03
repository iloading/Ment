-- MySQL dump 10.13  Distrib 8.0.24, for macos11 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `avatar`
--

DROP TABLE IF EXISTS `avatar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avatar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `alt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idavatar_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avatar`
--

LOCK TABLES `avatar` WRITE;
/*!40000 ALTER TABLE `avatar` DISABLE KEYS */;
INSERT INTO `avatar` VALUES (1,'avatar_1.png','senhora com cabelo preto, camisola vermelha e colar'),(2,'avatar_2.png','senhora com cabelo preto, camisola vermelha e colar'),(3,'avatar_3.png','senhora com cabelo preto, camisola vermelha e colar'),(4,'avatar_4.png','senhora com cabelo preto, camisola vermelha e colar'),(5,'avatar_5.png','senhora com cabelo preto, camisola vermelha e colar'),(6,'avatar_6.png','senhora com cabelo preto, camisola vermelha e colar'),(7,'avatar_7.png','senhora com cabelo preto, camisola vermelha e colar'),(8,'avatar_8.png','senhora com cabelo preto, camisola vermelha e colar'),(9,'avatar_9.png','senhora com cabelo preto, camisola vermelha e colar'),(10,'avatar_10.png','senhora com cabelo preto, camisola vermelha e colar'),(11,'avatar_11.png','senhora com cabelo preto, camisola vermelha e colar'),(12,'avatar_12.png','senhora com cabelo preto, camisola vermelha e colar'),(13,'avatar_13.png','senhora com cabelo preto, camisola vermelha e colar'),(14,'avatar_14.png','senhora com cabelo preto, camisola vermelha e colar'),(15,'avatar_15.png','senhora com cabelo preto, camisola vermelha e colar'),(16,'avatar_16.png','senhora com cabelo preto, camisola vermelha e colar'),(17,'avatar_17.png','senhora com cabelo preto, camisola vermelha e colar'),(18,'avatar_18.png','senhora com cabelo preto, camisola vermelha e colar'),(19,'avatar_19.png','senhora com cabelo preto, camisola vermelha e colar'),(20,'avatar_20.png','senhora com cabelo preto, camisola vermelha e colar');
/*!40000 ALTER TABLE `avatar` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-01 21:06:47
