import express from "express";

import { returnBookSchema } from "../schemas";
import { UserService, BorrowedService } from "../services";
import { createUserSchema } from "../schemas/user.schema";
import { bodyValidate } from "../middleware";

const router = express.Router();

export class UserRoute {
  constructor(
    private userService: UserService,
    private borrowedService: BorrowedService
  ) {}

  public getRouter() {

    router.get("/", async (req, res) => {
      try {
        const users = await this.userService.getUsers();
        res.status(200).send(users);
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    });

    router.post("/", [bodyValidate(createUserSchema)], async (req, res) => {
      try {
        const { name } = req.body;
        await this.userService.createUser(name);
        res.sendStatus(201);
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    });

    router.get("/:id", async (req, res) => {
      try {
        const userId = parseInt(req.params.id, 10);
        const user = await this.borrowedService.getUserById(userId);
        res.status(200).send(user);
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    });

    router.post("/:userId/borrow/:bookId", async (req, res) => {
      try {
        const userId = parseInt(req.params.userId, 10);
        const bookId = parseInt(req.params.bookId, 10);

        await this.borrowedService.borrowBook(userId, bookId);

        res.sendStatus(204);
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    });


    router.post("/:userId/return/:bookId", [bodyValidate(returnBookSchema)], async (req, res) => {
      try {
        const userId = parseInt(req.params.userId, 10);
        const bookId = parseInt(req.params.bookId, 10);
        const score = req.body.score;

        await this.borrowedService.returnBook(userId, bookId, score);
        res.sendStatus(204);
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    });

    return router;
  }
}
