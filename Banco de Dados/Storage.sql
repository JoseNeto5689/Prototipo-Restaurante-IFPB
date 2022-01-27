-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.6.5-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para storage
CREATE DATABASE IF NOT EXISTS `storage` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `storage`;

-- Copiando estrutura para tabela storage.food_kinds
CREATE TABLE IF NOT EXISTS `food_kinds` (
  `food_kind_id` int(11) NOT NULL AUTO_INCREMENT,
  `food_kind` varchar(30) NOT NULL,
  PRIMARY KEY (`food_kind_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela storage.food_kinds: ~8 rows (aproximadamente)
/*!40000 ALTER TABLE `food_kinds` DISABLE KEYS */;
INSERT INTO `food_kinds` (`food_kind_id`, `food_kind`) VALUES
	(1, 'Carboidratos'),
	(2, 'Hortaliças'),
	(3, 'Frutas'),
	(4, 'Leguminosas'),
	(5, 'Carnes e ovos'),
	(6, 'Leite e derivados'),
	(7, 'Óleos e gorduras'),
	(8, 'Açúcares');
/*!40000 ALTER TABLE `food_kinds` ENABLE KEYS */;

-- Copiando estrutura para tabela storage.product
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(100) NOT NULL,
  `product_description` text DEFAULT NULL,
  `amount` int(10) unsigned NOT NULL,
  `food_kind` int(11) NOT NULL,
  `expiration_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `food_kind` (`food_kind`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`food_kind`) REFERENCES `food_kinds` (`food_kind_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela storage.product: ~5 rows (aproximadamente)
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`id`, `product_name`, `product_description`, `amount`, `food_kind`, `expiration_date`) VALUES
	(23, 'Coentro', 'Pacotes de 45g de coentro', 100, 2, '2022-01-07'),
	(24, 'Leite em pó', 'Sacos de 250g de leite em pó ninho', 500, 6, '2022-12-03'),
	(25, 'Mortadela', 'Kilogramas de mortadela mista', 500, 1, '2023-12-03'),
	(30, 'Farinha', 'Pacotes de farinha com 45g cada', 10, 1, '2022-07-14'),
	(31, 'Maracujá ', 'Pacotes contendo 50 maracujás cada.', 500, 3, '2022-08-12');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
