GRANT ALL ON `library`.* TO 'api'@'%';

CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE book (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  score FLOAT NOT NULL DEFAULT -1,
  borrowCount INT
);

CREATE TABLE borrowed_book (
  id INT AUTO_INCREMENT PRIMARY KEY,
  bookId INT NOT NULL,
  userId INT NOT NULL,
  userScore FLOAT,
  borrowDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  returnDate DATETIME,
  FOREIGN KEY (userId) REFERENCES user(id),
  FOREIGN KEY (bookId) REFERENCES book(id)
);


INSERT INTO `library`.`user` (`id`, `name`) VALUES ('1', 'User 1');
INSERT INTO `library`.`user` (`id`, `name`) VALUES ('2', 'User 2');
INSERT INTO `library`.`user` (`id`, `name`) VALUES ('3', 'User 3');

INSERT INTO `library`.`book` (`id`, `name`) VALUES ('1', 'Book 1');
INSERT INTO `library`.`book` (`id`, `name`) VALUES ('2', 'Book 2');
INSERT INTO `library`.`book` (`id`, `name`) VALUES ('3', 'Book 3');
