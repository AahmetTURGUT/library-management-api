import { DataTypes, Model, Optional, Sequelize } from "sequelize";

export interface UserAttributes {
  id: number;
  name: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  id!: number;
  name!: string;
}

export function UserFactory(dbConfig: Sequelize): typeof User {
  const model = User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      name: {
        singular: "user",
        plural: "users",
      },
      tableName: "user",
      timestamps: false,
      sequelize: dbConfig,
    }
  );

  return model;
}
