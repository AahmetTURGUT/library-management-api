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
exports.BookService = void 0;
const dto_1 = require("../dto");
class BookService {
    constructor(bookEntity) {
        this.bookEntity = bookEntity;
    }
    getBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield this.bookEntity.findAll({
                attributes: ['id', 'name']
            });
            return books.map((book) => new dto_1.BookListResponseDto(book));
        });
    }
    getBookById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.getBook(id);
            return new dto_1.BookResponseDto(book);
        });
    }
    createBook(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.bookEntity.create({ name });
            return;
        });
    }
    getBook(bookId) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.bookEntity.findByPk(bookId);
            if (!book) {
                throw new Error("Book Not Found");
            }
            return book;
        });
    }
    getBookEntity() {
        return this.bookEntity;
    }
}
exports.BookService = BookService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGdDQUE4RDtBQUc5RCxNQUFhLFdBQVc7SUFDcEIsWUFDWSxVQUF1QjtRQUF2QixlQUFVLEdBQVYsVUFBVSxDQUFhO0lBQy9CLENBQUM7SUFFUSxRQUFROztZQUNqQixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2dCQUN4QyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO2FBQzdCLENBQUMsQ0FBQztZQUNILE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSx5QkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7S0FBQTtJQUVZLFdBQVcsQ0FBQyxFQUFVOztZQUMvQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDcEMsT0FBTyxJQUFJLHFCQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUFDLElBQVk7O1lBQ2hDLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU87UUFDWCxDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsTUFBYzs7WUFDL0IsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNQLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUNyQztZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUVNLGFBQWE7UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7Q0FDSjtBQWxDRCxrQ0FrQ0MifQ==