"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowedBookFactory = exports.BorrowedBook = void 0;
const sequelize_1 = require("sequelize");
class BorrowedBook extends sequelize_1.Model {
}
exports.BorrowedBook = BorrowedBook;
function BorrowedBookFactory(dbConfig) {
    const model = BorrowedBook.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        bookId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        userId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        userScore: {
            type: sequelize_1.DataTypes.FLOAT
        },
        borrowDate: {
            type: sequelize_1.DataTypes.DATE,
            defaultValue: new Date()
        },
        returnDate: {
            type: sequelize_1.DataTypes.DATE,
        }
    }, {
        name: {
            singular: "borrowed_book",
            plural: "borrowed_books",
        },
        tableName: "borrowed_book",
        timestamps: false,
        sequelize: dbConfig
    });
    return model;
}
exports.BorrowedBookFactory = BorrowedBookFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9ycm93ZWQtYm9vay5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9ib3Jyb3dlZC1ib29rLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFrRTtBQWdCbEUsTUFBYSxZQUNULFNBQVEsaUJBR1A7Q0FXSjtBQWZELG9DQWVDO0FBRUQsU0FBZ0IsbUJBQW1CLENBQy9CLFFBQW1CO0lBRW5CLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQzNCO1FBQ0ksRUFBRSxFQUFFO1lBQ0EsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztZQUN2QixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUN0QjtRQUNELE1BQU0sRUFBRTtZQUNKLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87WUFDdkIsU0FBUyxFQUFFLEtBQUs7U0FDbkI7UUFDRCxNQUFNLEVBQUU7WUFDSixJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLO1NBQ25CO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsSUFBSSxFQUFFLHFCQUFTLENBQUMsS0FBSztTQUN4QjtRQUNELFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxxQkFBUyxDQUFDLElBQUk7WUFDcEIsWUFBWSxFQUFFLElBQUksSUFBSSxFQUFFO1NBQzNCO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtTQUN2QjtLQUNKLEVBQ0Q7UUFDSSxJQUFJLEVBQUU7WUFDRixRQUFRLEVBQUUsZUFBZTtZQUN6QixNQUFNLEVBQUUsZ0JBQWdCO1NBQzNCO1FBQ0QsU0FBUyxFQUFFLGVBQWU7UUFDMUIsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLFFBQVE7S0FDdEIsQ0FDSixDQUFDO0lBQ0YsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQXhDRCxrREF3Q0MifQ==