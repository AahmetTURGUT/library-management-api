import { BorrowedDto, PastBorrowedDto, PresentBorrowedDto, UserBorrowedDto } from "../dto";
import { Book } from "../models/book.model";
import { BorrowedBook } from "../models/borrowed-book.model";
import { User } from "../models/user.model";
import { BookService } from "./book.service";
import { UserService } from "./user.service";

export class BorrowedService {
    constructor(
        private userService: UserService,
        private bookService: BookService,
        private borrowedEntity: typeof BorrowedBook
    ) { }

    public async borrowBook(userId: number, bookId: number): Promise<void> {
        await this.validateUserAndBook(userId, bookId);
        await this.checkIfBookIsAlreadyBorrowed(bookId);
        await this.borrowedEntity.create({ userId, bookId });
    }

    public async returnBook(userId: number, bookId: number, score: number): Promise<void> {
        const { user, book } = await this.validateUserAndBook(userId, bookId);
        const borrowedBook = await this.checkIfBookIsNotBorrowed(userId, bookId);
        await borrowedBook.update({ returnDate: new Date(), userScore: score });
        await this.updateBookScore(book, score);
    }

    public async getUserById(userId: number): Promise<UserBorrowedDto> {
        const user = await this.userService.getUser(userId);
        const { pastBorrowed, presentBorrowed } = await this.getBorrowedBooksByUser(userId);
        let borrowedDto = new BorrowedDto(pastBorrowed, presentBorrowed);
        return new UserBorrowedDto(user.id, user.name, borrowedDto);
    }


    private async validateUserAndBook(userId: number, bookId: number): Promise<{ user: User; book: Book }> {
        const user = await this.userService.getUser(userId);
        const book = await this.bookService.getBook(bookId);
        return { user, book };
    }

    private async checkIfBookIsAlreadyBorrowed(bookId: number): Promise<void> {
        const isBorrowed = await this.borrowedEntity.findOne({
            where: { bookId, returnDate: null }
        });
        if (isBorrowed) {
            throw new Error("Book is already borrowed");
        }
    }

    private async checkIfBookIsNotBorrowed(userId: number, bookId: number): Promise<BorrowedBook> {
        const borrowedBook = await this.borrowedEntity.findOne({
            where: { userId, bookId, returnDate: null }
        });
        if (!borrowedBook) {
            throw new Error("Book is not borrowed");
        }
        return borrowedBook;
    }

    private async updateBookScore(book: Book, score: number): Promise<void> {
        const totalScore = book.score * book.borrowCount;
        const newBorrowCount = book.borrowCount + 1;
        const newScore = (totalScore + score) / newBorrowCount;
        await book.update({ borrowCount: newBorrowCount, score: newScore });
    }

    private async getBorrowedBooksByUser(userId: number): Promise<{ pastBorrowed: PastBorrowedDto[]; presentBorrowed: PresentBorrowedDto[] }> {
        let pastBorrowed: PastBorrowedDto[] = [];
        let presentBorrowed: PresentBorrowedDto[] = [];

        const borrowedBooks = await this.borrowedEntity.findAll({
            where: { userId },
            include: [{ model: this.bookService.getBookEntity(), attributes: ['name'] }]
        });

        for (const borrowedBook of borrowedBooks) {
            const book = borrowedBook.book;
            if (borrowedBook.returnDate) {
                pastBorrowed.push(new PastBorrowedDto(book.name, borrowedBook.userScore));
            } else {
                presentBorrowed.push(new PresentBorrowedDto(book.name));
            }
        }

        return { pastBorrowed, presentBorrowed };
    }

    
}
