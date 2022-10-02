CREATE DATABASE  IF NOT EXISTS `db_libreria` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_libreria`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: db_libreria
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `idbook` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `volume` varchar(45) DEFAULT NULL,
  `author` varchar(45) NOT NULL,
  `genre` varchar(100) NOT NULL,
  `photo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idbook`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'Lolita',NULL,'Vladimir Nabokov','Tragicomedia','../assets/img/Lolita.jpg'),(2,'Don\'t toy with me, miss Nagatoro','5','Nanashi','Comedia romántica','../assets/img/Nagatoro.jpg'),(3,'Tokyo Ghoul','3','Sui Ishida','Acción','../assets/img/TokyoGhoul.jpg'),(4,'Amanecer Rojo',NULL,'Johan Santana','Ciencia ficción','../assets/img/AmanecerRojo.jpg'),(5,'Crepúsculo',NULL,'Stepheni Meyer','Ficción Romántica','../assets/img/Crepusculo.jpg'),(6,'Don\'t toy with me, miss Nagatoro','6','Nanashi','Comedia Romantica','../assets/img/Nagatoro6.jpg'),(7,'Killing Stalking','1','Koogi','Drama, Horror, Terror psicológico','../assets/img/ks.jpg'),(8,'Berserk','4','Kentaro Miura','Manga,\nFantasía oscura,\nAlta fantasía,\nEspada y brujería','../assets/img/Berserk.jpg'),(9,'El yo y el ello','','Sigmund Freud','Psicología','../assets/img/elyoyelello.jpg'),(50,'Harry Potter y la piedra filosofal','','J.K Rowling','Magia','https://m.media-amazon.com/images/I/71UBPNAvmAL.jpg');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-02 17:51:38
