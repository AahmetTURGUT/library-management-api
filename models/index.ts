import Sequelize from "sequelize";
import dbConfig from "../db/sequelize";
import SequelizeSimpleCache from 'sequelize-simple-cache';
import { Book, BookFactory } from "./book.model";
import { BorrowedBook, BorrowedBookFactory } from "./borrowed-book.model";
import { User, UserFactory } from "./user.model";

export class DB {

  public User: typeof User;
  public Book: typeof Book;
  public BorrowedBook: typeof BorrowedBook;

  public Sequelize: typeof Sequelize;

  public dbd: any = {
    Sequelize: {},
  };

  constructor() {
    const cache = new SequelizeSimpleCache({
      Book: { ttl: 60 * 60 }
    });

    this.BorrowedBook = BorrowedBookFactory(dbConfig);
    this.User = UserFactory(dbConfig);
    this.Book = cache.init(BookFactory(dbConfig));

    this.setAssociations();
    this.Sequelize = Sequelize;
  }

  setAssociations() {
    this.User.hasMany(this.BorrowedBook, {
      foreignKey: "userId",
    });
    this.BorrowedBook.belongsTo(this.User, {
      targetKey: "id",
      foreignKey: "userId",
    });

    this.Book.hasMany(this.BorrowedBook, {
      foreignKey: "bookId",
    });
    this.BorrowedBook.belongsTo(this.Book, {
      targetKey: "id",
      foreignKey: "bookId",
    });
  }
}
