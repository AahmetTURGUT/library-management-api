"use strict";
const sequelize_1 = require("sequelize");
const dbConfig = new sequelize_1.Sequelize({
    host: process.env.sqlHost,
    port: parseInt(process.env.sqlPort, 10),
    database: process.env.sqlDB,
    username: process.env.sqlUser,
    password: process.env.sqlPass,
    dialect: 'mysql'
});
module.exports = dbConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VxdWVsaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGIvc2VxdWVsaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5Q0FBc0M7QUFFdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxxQkFBUyxDQUFDO0lBQzdCLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87SUFDekIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7SUFDdkMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSztJQUMzQixRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPO0lBQzdCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU87SUFDN0IsT0FBTyxFQUFFLE9BQU87Q0FDakIsQ0FBQyxDQUFDO0FBRUgsaUJBQVMsUUFBUSxDQUFDIn0=