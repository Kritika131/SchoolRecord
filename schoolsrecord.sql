-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2023 at 09:08 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nextproducts`
--

-- --------------------------------------------------------

--
-- Table structure for table `schoolsrecord`
--

CREATE TABLE `schoolsrecord` (
  `id` int(11) NOT NULL,
  `school_name` varchar(250) NOT NULL,
  `address` varchar(250) NOT NULL,
  `city` varchar(250) NOT NULL,
  `state` varchar(250) NOT NULL,
  `contact` int(120) NOT NULL,
  `email` varchar(250) NOT NULL,
  `imagefile` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `schoolsrecord`
--

INSERT INTO `schoolsrecord` (`id`, `school_name`, `address`, `city`, `state`, `contact`, `email`, `imagefile`) VALUES
(7, 'school name', 'address', 'city nane', 'state name', 2147483647, 'sdjk@gmail.com', '/schoolImages/school-1.jpg'),
(8, 'school2', 'address2', 'city2', 'state2', 2147483647, 'dfsf@gmail.com', '/schoolImages/school-1.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `schoolsrecord`
--
ALTER TABLE `schoolsrecord`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `schoolsrecord`
--
ALTER TABLE `schoolsrecord`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
