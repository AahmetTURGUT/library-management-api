"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookFactory = exports.Book = void 0;
const sequelize_1 = require("sequelize");
class Book extends sequelize_1.Model {
}
exports.Book = Book;
function BookFactory(dbConfig) {
    const model = Book.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        score: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
            defaultValue: -1
        },
        borrowCount: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
        }
    }, {
        name: {
            singular: "book",
            plural: "books",
        },
        tableName: "book",
        timestamps: false,
        sequelize: dbConfig
    });
    return model;
}
exports.BookFactory = BookFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9ib29rLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFrRTtBQVlsRSxNQUFhLElBQ1QsU0FBUSxpQkFHUDtDQU1KO0FBVkQsb0JBVUM7QUFFRCxTQUFnQixXQUFXLENBQ3ZCLFFBQW1CO0lBRW5CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQ25CO1FBQ0ksRUFBRSxFQUFFO1lBQ0EsSUFBSSxFQUFFLHFCQUFTLENBQUMsT0FBTztZQUN2QixVQUFVLEVBQUUsSUFBSTtZQUNoQixhQUFhLEVBQUUsSUFBSTtTQUN0QjtRQUNELElBQUksRUFBRTtZQUNGLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLEtBQUs7U0FDbkI7UUFDRCxLQUFLLEVBQUU7WUFDSCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxLQUFLO1lBQ3JCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFlBQVksRUFBRSxDQUFDLENBQUM7U0FDbkI7UUFDRCxXQUFXLEVBQUU7WUFDVCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJO1NBQ2xCO0tBQ0osRUFDRDtRQUNJLElBQUksRUFBRTtZQUNGLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE1BQU0sRUFBRSxPQUFPO1NBQ2xCO1FBQ0QsU0FBUyxFQUFFLE1BQU07UUFDakIsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLFFBQVE7S0FDdEIsQ0FDSixDQUFDO0lBQ0YsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQW5DRCxrQ0FtQ0MifQ==