"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const sequelize_2 = __importDefault(require("../db/sequelize"));
const sequelize_simple_cache_1 = __importDefault(require("sequelize-simple-cache"));
const book_model_1 = require("./book.model");
const borrowed_book_model_1 = require("./borrowed-book.model");
const user_model_1 = require("./user.model");
class DB {
    constructor() {
        this.dbd = {
            Sequelize: {},
        };
        const cache = new sequelize_simple_cache_1.default({
            Book: { ttl: 60 * 60 }
        });
        this.BorrowedBook = (0, borrowed_book_model_1.BorrowedBookFactory)(sequelize_2.default);
        this.User = (0, user_model_1.UserFactory)(sequelize_2.default);
        this.Book = cache.init((0, book_model_1.BookFactory)(sequelize_2.default));
        this.setAssociations();
        this.Sequelize = sequelize_1.default;
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
exports.DB = DB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMERBQWtDO0FBQ2xDLGdFQUF1QztBQUN2QyxvRkFBMEQ7QUFDMUQsNkNBQWlEO0FBQ2pELCtEQUEwRTtBQUMxRSw2Q0FBaUQ7QUFFakQsTUFBYSxFQUFFO0lBWWI7UUFKTyxRQUFHLEdBQVE7WUFDaEIsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBR0EsTUFBTSxLQUFLLEdBQUcsSUFBSSxnQ0FBb0IsQ0FBQztZQUNyQyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtTQUN2QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUEseUNBQW1CLEVBQUMsbUJBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBQSx3QkFBVyxFQUFDLG1CQUFRLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBQSx3QkFBVyxFQUFDLG1CQUFRLENBQUMsQ0FBQyxDQUFDO1FBRTlDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFTLENBQUM7SUFDN0IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25DLFVBQVUsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDckMsU0FBUyxFQUFFLElBQUk7WUFDZixVQUFVLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25DLFVBQVUsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDckMsU0FBUyxFQUFFLElBQUk7WUFDZixVQUFVLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUExQ0QsZ0JBMENDIn0=