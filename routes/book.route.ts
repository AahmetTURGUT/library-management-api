import express from "express";
import { bodyValidate } from "../middleware";
import { createBookSchema } from "../schemas";
import { BookService } from "../services";

const router = express.Router();

export class BookRoute {
  constructor(
    private bookService: BookService,
  ) {} 
  public getRouter() {

    router.get("/", async (req, res) => {
      try {
        const books = await this.bookService.getBooks();
        res.status(200).send(books);
      } catch (error) {
        res.status(400).send({ message:  error.message });
      }
    });

    router.post("/", [bodyValidate(createBookSchema)], async (req, res) => {
      try {
        const { name } = req.body;
        await this.bookService.createBook(name);
        res.sendStatus(201);
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    });

    router.get("/:id", async (req, res) => {
      try {
        const bookId = parseInt(req.params.id, 10);
        const bookDto = await this.bookService.getBookById(bookId);
        res.status(200).send(bookDto);
      } catch (error) {
        res.status(400).send({ message: error.message })
      }
    });

    return router;
  }
}
