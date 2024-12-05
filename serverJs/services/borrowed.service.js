"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowedService = void 0;
const dto_1 = require("../dto");
class BorrowedService {
    constructor(userService, bookService, borrowedEntity) {
        this.userService = userService;
        this.bookService = bookService;
        this.borrowedEntity = borrowedEntity;
    }
    borrowBook(userId, bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateUserAndBook(userId, bookId);
            yield this.checkIfBookIsAlreadyBorrowed(bookId);
            yield this.borrowedEntity.create({ userId, bookId });
        });
    }
    returnBook(userId, bookId, score) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user, book } = yield this.validateUserAndBook(userId, bookId);
            const borrowedBook = yield this.checkIfBookIsNotBorrowed(userId, bookId);
            yield borrowedBook.update({ returnDate: new Date(), userScore: score });
            yield this.updateBookScore(book, score);
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.getUser(userId);
            const { pastBorrowed, presentBorrowed } = yield this.getBorrowedBooksByUser(userId);
            let borrowedDto = new dto_1.BorrowedDto(pastBorrowed, presentBorrowed);
            return new dto_1.UserBorrowedDto(user.id, user.name, borrowedDto);
        });
    }
    validateUserAndBook(userId, bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.getUser(userId);
            const book = yield this.bookService.getBook(bookId);
            return { user, book };
        });
    }
    checkIfBookIsAlreadyBorrowed(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            const isBorrowed = yield this.borrowedEntity.findOne({
                where: { bookId, returnDate: null }
            });
            if (isBorrowed) {
                throw new Error("Book is already borrowed");
            }
        });
    }
    checkIfBookIsNotBorrowed(userId, bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            const borrowedBook = yield this.borrowedEntity.findOne({
                where: { userId, bookId, returnDate: null }
            });
            if (!borrowedBook) {
                throw new Error("Book is not borrowed");
            }
            return borrowedBook;
        });
    }
    updateBookScore(book, score) {
        return __awaiter(this, void 0, void 0, function* () {
            const totalScore = book.score * book.borrowCount;
            const newBorrowCount = book.borrowCount + 1;
            const newScore = (totalScore + score) / newBorrowCount;
            yield book.update({ borrowCount: newBorrowCount, score: newScore });
        });
    }
    getBorrowedBooksByUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let pastBorrowed = [];
            let presentBorrowed = [];
            const borrowedBooks = yield this.borrowedEntity.findAll({
                where: { userId },
                include: [{ model: this.bookService.getBookEntity(), attributes: ['name'] }]
            });
            for (const borrowedBook of borrowedBooks) {
                const book = borrowedBook.book;
                if (borrowedBook.returnDate) {
                    pastBorrowed.push(new dto_1.PastBorrowedDto(book.name, borrowedBook.userScore));
                }
                else {
                    presentBorrowed.push(new dto_1.PresentBorrowedDto(book.name));
                }
            }
            return { pastBorrowed, presentBorrowed };
        });
    }
}
exports.BorrowedService = BorrowedService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9ycm93ZWQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZpY2VzL2JvcnJvd2VkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsZ0NBQTJGO0FBTzNGLE1BQWEsZUFBZTtJQUN4QixZQUNZLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGNBQW1DO1FBRm5DLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFxQjtJQUMzQyxDQUFDO0lBRVEsVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFjOztZQUNsRCxNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDL0MsTUFBTSxJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEQsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQTtJQUVZLFVBQVUsQ0FBQyxNQUFjLEVBQUUsTUFBYyxFQUFFLEtBQWE7O1lBQ2pFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN6RSxNQUFNLFlBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN4RSxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENB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