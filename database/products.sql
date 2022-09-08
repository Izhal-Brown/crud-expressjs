-- Adminer 4.8.1 MySQL 5.7.33 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `users_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `image_url` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `products` (`id`, `users_id`, `name`, `price`, `stock`, `status`, `image_url`, `createdAt`, `updatedAt`) VALUES
(1,	1,	'Laptop Acer',	16000000,	10,	1,	'http://localhost:3000/public/acer.png',	'2022-09-08 02:44:19',	'2022-09-08 02:44:19'),
(2,	2,	'Laptop Asus',	10000000,	5,	1,	'http://localhost:3000/public/asus.jpg',	'2022-09-08 02:44:38',	'2022-09-08 02:44:38'),
(3,	1,	'Laptop Lenovo',	8000000,	15,	0,	'http://localhost:3000/public/lenovo.jpg',	'2022-09-08 02:45:02',	'2022-09-08 02:45:02'),
(4,	1,	'Laptop Dell',	17000000,	25,	1,	'http://localhost:3000/public/dell.jpg',	'2022-09-08 02:45:33',	'2022-09-08 02:45:33'),
(5,	1,	'Laptop Hp',	12000000,	40,	1,	'http://localhost:3000/public/hp.webp',	'2022-09-08 02:45:58',	'2022-09-08 02:46:36');

-- 2022-09-08 02:49:44
