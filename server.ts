import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

import express from "express";
import dbConfig from "./db/sequelize";
import { DB } from "./models";
import cors = require("cors");

const compression = require("compression");


/**
 * Server
 */
export class Server {
  public db: DB;
  public app: express.Application;


  constructor() {
    this.setDatabaseInstance();
    this.setUtilAndRouteInstances();
    this.startServer();
  }


  public startServer() {
    return new Promise((resolve, reject) => {
      const promises: Promise<any>[] = [this.connectToDb()];
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

  
  private connectToDb() {
    return new Promise((resolve, reject) => {
      dbConfig
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

  private syncDbModels() {
    return new Promise((resolve, reject) => {
      dbConfig
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


  private createHttpServer() {
    this.app = express();
    this.app.use(compression());
  }

  private configureExpressApp() {
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(
      express.urlencoded({
        extended: false,
        limit: "50mb",
      })
    );
  }

  private setAppRoutes() {
    const options: cors.CorsOptions = {
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

  private setDatabaseInstance() {
    this.db = new DB();
  }

 
  private setUtilAndRouteInstances() {
   
  }
}

new Server();

