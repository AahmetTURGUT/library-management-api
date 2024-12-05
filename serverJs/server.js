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
const cors = require("cors");
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
    }
    setDatabaseInstance() {
        this.db = new models_1.DB();
    }
    setUtilAndRouteInstances() {
    }
}
exports.Server = Server;
new Server();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLE1BQU0sQ0FBQztJQUNaLElBQUksRUFBRSxNQUFNO0NBQ2IsQ0FBQyxDQUFDO0FBRUgsc0RBQThCO0FBQzlCLCtEQUFzQztBQUN0QyxxQ0FBOEI7QUFDOUIsNkJBQThCO0FBRTlCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUczQzs7R0FFRztBQUNILE1BQWEsTUFBTTtJQUtqQjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR00sV0FBVztRQUNoQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLE1BQU0sUUFBUSxHQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7Z0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUNsRSxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO2lCQUNsQixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZ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