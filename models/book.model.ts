import { DataTypes, Model, Optional, Sequelize } from "sequelize";

export interface BookAttributes {
    id: number;
    name: string;
    score: number;
    borrowCount: number;
}

interface BookCreationAttributes
    extends Optional<BookAttributes, "id"> { }

export class Book
    extends Model<
        BookAttributes,
        BookCreationAttributes
    >
    implements BookAttributes {
    id!: number;
    name!: string;
    score!: number;
    borrowCount!: number;
}

export function BookFactory(
    dbConfig: Sequelize
): typeof Book {
    const model = Book.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            score: {
                type: DataTypes.FLOAT,
                allowNull: false,
                defaultValue: -1
            },
            borrowCount: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        },
        {
            name: {
                singular: "book",
                plural: "books",
            },
            tableName: "book",
            timestamps: false,
            sequelize: dbConfig
        }
    );
    return model;
}
