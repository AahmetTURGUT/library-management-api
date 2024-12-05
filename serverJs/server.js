"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: ".env",
});
const express_1 = __importDefault(require("express"));
const sequelize_1 = __importDefault(require("./db/sequelize"));
const models_1 = require("./models");
const routes_1 = require("./routes");
const cors = require("cors");
const services_1 = require("./services");
const compression = require("compression");
/**
 * Server
 */
class Server {
    constructor() {
        this.setDatabaseInstance();
        this.setUtilAndRouteInstances();
        this.startServer();
    }
    startServer() {
        return new Promise((resolve, reject) => {
            const promises = [this.connectToDb()];
            this.createHttpServer();
            this.configureExpressApp();
            this.setAppRoutes();
            this.app.listen(process.env.httpPort, () => {
                console.log(`API running on localhost:${process.env.httpPort}`);
            });
            Promise.all(promises)
                .then(() => {
                resolve(true);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    connectToDb() {
        return new Promise((resolve, reject) => {
            sequelize_1.default
                .authenticate()
                .then(() => {
                console.log("Connection has been established successfully.");
                this.syncDbModels()
                    .then(() => {
                    resolve(true);
                })
                    .catch((err) => {
                    reject(err);
                });
            })
                .catch((err) => {
                reject("Unable to connect to the database: " + err);
            });
        });
    }
    syncDbModels() {
        return new Promise((resolve, reject) => {
            sequelize_1.default
                .sync()
                .then((result) => {
                console.log("Synced");
                resolve(true);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    createHttpServer() {
        this.app = (0, express_1.default)();
        this.app.use(compression());
    }
    configureExpressApp() {
        this.app.use(express_1.default.json({ limit: "50mb" }));
        this.app.use(express_1.default.urlencoded({
            extended: false,
            limit: "50mb",
        }));
    }
    setAppRoutes() {
        const options = {
            allowedHeaders: [
                "Origin",
                "X-Requested-With",
                "Content-Type",
                "Accept",
                "X-Access-Token",
                "authorization",
                "auid",
                "domain_id",
                "Access-Control-Allow-Origin",
                "Referer",
                "User-Agent",
            ],
            credentials: true,
            methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
            origin: "*",
            preflightContinue: false,
        };
        this.app.use(cors(options));
        this.app.use("/users", this.userRoute.getRouter());
        this.app.use("/books", this.bookRoute.getRouter());
    }
    setDatabaseInstance() {
        this.db = new models_1.DB();
    }
    setUtilAndRouteInstances() {
        this.userService = new services_1.UserService(this.db.User);
        this.bookService = new services_1.BookService(this.db.Book);
        this.borrowedService = new services_1.BorrowedService(this.userService, this.bookService, this.db.BorrowedBook);
        this.userRoute = new routes_1.UserRoute(this.userService, this.borrowedService);
        this.bookRoute = new routes_1.BookRoute(this.bookService);
    }
}
exports.Server = Server;
new Server();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLE1BQU0sQ0FBQztJQUNaLElBQUksRUFBRSxNQUFNO0NBQ2IsQ0FBQyxDQUFDO0FBRUgsc0RBQThCO0FBQzlCLCtEQUFzQztBQUN0QyxxQ0FBOEI7QUFDOUIscUNBR2tCO0FBQ2xCLDZCQUE4QjtBQUM5Qix5Q0FJb0I7QUFFcEIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRzNDOztHQUVHO0FBQ0gsTUFBYSxNQUFNO0lBWWpCO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxRQUFRLEdBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtnQkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7aUJBQ2xCLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDYixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdPLFdBQVc7UUFDakIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxtQkFBUTtpQkFDTCxZQUFZLEVBQUU7aUJBQ2QsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLCtDQUErQyxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxZQUFZLEVBQUU7cUJBQ2hCLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ2IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNiLE1BQU0sQ0FBQyxxQ0FBcUMsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN0RCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFlBQVk7UUFDbEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxtQkFBUTtpQkFDTCxJQUFJLEVBQUU7aUJBQ04sSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDYixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdPLGdCQUFnQjtRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQ1YsaUJBQU8sQ0FBQyxVQUFVLENBQUM7WUFDakIsUUFBUSxFQUFFLEtBQUs7WUFDZixLQUFLLEVBQUUsTUFBTTtTQUNkLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVPLFlBQVk7UUFDbEIsTUFBTSxPQUFPLEdBQXFCO1lBQ2hDLGNBQWMsRUFBRTtnQkFDZCxRQUFRO2dCQUNSLGtCQUFrQjtnQkFDbEIsY0FBYztnQkFDZCxRQUFRO2dCQUNSLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixNQUFNO2dCQUNOLFdBQVc7Z0JBQ1gsNkJBQTZCO2dCQUM3QixTQUFTO2dCQUNULFlBQVk7YUFDYjtZQUNELFdBQVcsRUFBRSxJQUFJO1lBQ2pCLE9BQU8sRUFBRSx3Q0FBd0M7WUFDakQsTUFBTSxFQUFFLEdBQUc7WUFDWCxpQkFBaUIsRUFBRSxLQUFLO1NBQ3pCLENBQUM7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVPLG1CQUFtQjtRQUN6QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksV0FBRSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUdPLHdCQUF3QjtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksc0JBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxzQkFBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLDBCQUFlLENBQ3hDLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUNyQixDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtCQUFTLENBQzVCLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxlQUFlLENBQ3JCLENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0JBQVMsQ0FDNUIsSUFBSSxDQUFDLFdBQVcsQ0FDakIsQ0FBQztJQUVKLENBQUM7Q0FDRjtBQTFJRCx3QkEwSUM7QUFFRCxJQUFJLE1BQU0sRUFBRSxDQUFDIn0=