import { BookListResponseDto, BookResponseDto } from "../dto";
import { Book } from "../models/book.model";

export class BookService {
    constructor(
        private bookEntity: typeof Book,
    ) { }

    public async getBooks(): Promise<BookListResponseDto[]> {
        const books = await this.bookEntity.findAll({
            attributes: ['id', 'name']
        });
        return books.map((book) => new BookListResponseDto(book));
    }

    public async getBookById(id: number): Promise<BookResponseDto> {
        const book = await this.getBook(id);
        return new BookResponseDto(book);
    }

    public async createBook(name: string): Promise<void> {
        await this.bookEntity.create({ name });
        return;
    }

    public async getBook(bookId: number): Promise<Book> {
        const book = await this.bookEntity.findByPk(bookId);
        if (!book) {
            throw new Error("Book Not Found");
        }

        return book;
    }

    public getBookEntity(): typeof Book {
        return this.bookEntity;
    }
}
