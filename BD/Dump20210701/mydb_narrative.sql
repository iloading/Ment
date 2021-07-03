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
-- Table structure for table `narrative`
--

DROP TABLE IF EXISTS `narrative`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `narrative` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `team_id` int NOT NULL,
  `is_public` tinyint NOT NULL DEFAULT '0',
  `course_id` int NOT NULL,
  `subject` varchar(255) NOT NULL,
  `factos_reais` varchar(1000) DEFAULT NULL,
  `factos_ficcionais` varchar(1000) DEFAULT NULL,
  `situacao_problema` varchar(1000) DEFAULT NULL,
  `resultados_esperados` varchar(1000) DEFAULT NULL,
  `funcao_alunos_mentores` varchar(1000) DEFAULT NULL,
  `funcao_alunos_mentorandos` varchar(1000) DEFAULT NULL,
  `grade_id` int NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idnarrative_UNIQUE` (`id`),
  KEY `fk_narrative_team1_idx` (`team_id`),
  KEY `fk_narrative_course1_idx` (`course_id`),
  KEY `fk_narrative_grade1_idx` (`grade_id`),
  CONSTRAINT `fk_narrative_course1` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`),
  CONSTRAINT `fk_narrative_grade1` FOREIGN KEY (`grade_id`) REFERENCES `grade` (`id`),
  CONSTRAINT `fk_narrative_team1` FOREIGN KEY (`team_id`) REFERENCES `team` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `narrative`
--

LOCK TABLES `narrative` WRITE;
/*!40000 ALTER TABLE `narrative` DISABLE KEYS */;
INSERT INTO `narrative` VALUES (1,'Super Mario','Joguito de treta',1,0,23,'Arrays JS','Boss Levels do Super Mario','Desafios por castelo e inimigos imaginários','A princesa foi capturada por um enimigo poderoso','Os mentorandos sejam capazes de resolver problemas de arrays para conseguirem localizar a sala em que a princesa está','Guiar os mentorandos','Super Mario',11,'2021-06-29 13:11:28','2021-06-29 13:11:28');
/*!40000 ALTER TABLE `narrative` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-01 21:06:46
