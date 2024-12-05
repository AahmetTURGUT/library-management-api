import { Book } from "../models/book.model";

export class BookResponseDto {
    id: number;
    name: string;
    score: number;

    constructor(book: Book) {
        this.id = book.id;
        this.name = book.name;
        this.score = book.score;
    }
}

export class BookListResponseDto {
    id: number;
    name: string;

    constructor(book: Book) {
        this.id = book.id;
        this.name = book.name;
    }
}