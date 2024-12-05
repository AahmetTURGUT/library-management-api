import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import { Book } from "./book.model";
import { User } from "./user.model";

export interface BorrowedBookAttributes {
    id: number;
    userId: number;
    bookId: number;
    userScore: number;
    borrowDate: Date;
    returnDate: Date;
}

interface BorrowedBookCreationAttributes
    extends Optional<BorrowedBookAttributes, "id"> { }

export class BorrowedBook
    extends Model<
        BorrowedBookAttributes,
        BorrowedBookCreationAttributes
    >
    implements BorrowedBookAttributes {
    id!: number;
    userId: number;
    bookId: number;
    userScore!: number;
    borrowDate!: Date;
    returnDate!: Date;

    readonly book: Book;
    readonly user: User;
}

export function BorrowedBookFactory(
    dbConfig: Sequelize
): typeof BorrowedBook {
    const model = BorrowedBook.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            bookId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            userScore: {
                type: DataTypes.FLOAT
            },
            borrowDate: {
                type: DataTypes.DATE,
                defaultValue: new Date()
            },
            returnDate: {
                type: DataTypes.DATE,
            }
        },
        {
            name: {
                singular: "borrowed_book",
                plural: "borrowed_books",
            },
            tableName: "borrowed_book",
            timestamps: false,
            sequelize: dbConfig
        }
    );
    return model;
}
