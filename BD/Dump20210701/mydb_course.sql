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
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `level` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idcourse_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (2,110,'Ensino Básico - 1º Ciclo','1º Ciclo do Ensino Básico'),(3,120,'Inglês','1º Ciclo do Ensino Básico'),(4,200,'Português e Estudos Sociais/História','2º Ciclo do Ensino Básico'),(5,210,'Português e Francês','2º Ciclo do Ensino Básico'),(6,220,'Português e Inglês','2º Ciclo do Ensino Básico'),(7,230,'Matemática e Ciências da Natureza','2º Ciclo do Ensino Básico'),(8,240,'Educação Visual e Tecnológica','2º Ciclo do Ensino Básico'),(9,250,'Educação Musical ','2º Ciclo do Ensino Básico'),(10,260,'Educação Física','2º Ciclo do Ensino Básico'),(11,290,'Educação Moral e Religiosa','2º Ciclo do Ensino Básico'),(12,290,'Educação Moral e Religiosa','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(13,300,'Português','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(14,310,'Latim e Grego','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(15,320,'Francês','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(16,330,'Inglês','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(17,340,'Alemão','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(18,350,'Espanhol','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(19,400,'História','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(20,410,'Filosofia','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(21,420,'Geografia','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(22,430,'Economia e Contabilidade','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(23,500,'Matemática','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(24,510,'Física e Química ','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(25,520,'Biologia e Geologia','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(26,530,'Educação Tecnológica','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(27,540,'Electrotecnia','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(28,550,'Informática','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(29,560,'Ciências Agro-pecuárias','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(30,600,'Artes Visuais','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(31,610,'Música','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(32,620,'Educação Física','3º Ciclo do Ensino Básico\r\n e Ensino Secundár'),(33,360,'Língua Gestual Portuguesa ','Educação Pré-Escolar e 1º, 2º e 3º Ciclo do E'),(34,910,'Educação Especial - apoio a crianças e jovens','Educação Pré-Escolar e 1º, 2º e 3º Ciclo do E'),(35,920,'Educação Especial - apoio a crianças e jovens','Educação Pré-Escolar e 1º, 2º e 3º Ciclo do E'),(36,930,'Educação Especial - apoio educativo a criança','Educação Pré-Escolar e 1º, 2º e 3º Ciclo do E');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
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
