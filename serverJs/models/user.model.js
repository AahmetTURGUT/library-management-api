"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = exports.User = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
function UserFactory(dbConfig) {
    const model = User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        }
    }, {
        name: {
            singular: "user",
            plural: "users",
        },
        tableName: "user",
        timestamps: false,
        sequelize: dbConfig,
    });
    return model;
}
exports.UserFactory = UserFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy91c2VyLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUFrRTtBQVNsRSxNQUFhLElBQ1gsU0FBUSxpQkFBNkM7Q0FLdEQ7QUFORCxvQkFNQztBQUVELFNBQWdCLFdBQVcsQ0FBQyxRQUFtQjtJQUM3QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUNyQjtRQUNFLEVBQUUsRUFBRTtZQUNGLElBQUksRUFBRSxxQkFBUyxDQUFDLE9BQU87WUFDdkIsVUFBVSxFQUFFLElBQUk7WUFDaEIsYUFBYSxFQUFFLElBQUk7U0FDcEI7UUFDRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1lBQ3RCLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO0tBQ0YsRUFDRDtRQUNFLElBQUksRUFBRTtZQUNKLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE1BQU0sRUFBRSxPQUFPO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFLE1BQU07UUFDakIsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFLFFBQVE7S0FDcEIsQ0FDRixDQUFDO0lBRUYsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBekJELGtDQXlCQyJ9