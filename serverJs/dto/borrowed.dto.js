"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBorrowedDto = exports.BorrowedDto = exports.PresentBorrowedDto = exports.PastBorrowedDto = void 0;
class PastBorrowedDto {
    constructor(name, userScore) {
        this.name = name;
        this.userScore = userScore;
    }
}
exports.PastBorrowedDto = PastBorrowedDto;
class PresentBorrowedDto {
    constructor(name) {
        this.name = name;
    }
}
exports.PresentBorrowedDto = PresentBorrowedDto;
class BorrowedDto {
    constructor(past, present) {
        this.past = past;
        this.present = present;
    }
}
exports.BorrowedDto = BorrowedDto;
class UserBorrowedDto {
    constructor(id, name, books) {
        this.id = id;
        this.name = name;
        this.books = books;
    }
}
exports.UserBorrowedDto = UserBorrowedDto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9ycm93ZWQuZHRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZHRvL2JvcnJvd2VkLmR0by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLGVBQWU7SUFJeEIsWUFBWSxJQUFZLEVBQUUsU0FBaUI7UUFDdkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0IsQ0FBQztDQUNKO0FBUkQsMENBUUM7QUFFRCxNQUFhLGtCQUFrQjtJQUczQixZQUFZLElBQVk7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBTkQsZ0RBTUM7QUFFRCxNQUFhLFdBQVc7SUFJcEIsWUFBWSxJQUF1QixFQUFFLE9BQTZCO1FBQzlELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7Q0FDSjtBQVJELGtDQVFDO0FBRUQsTUFBYSxlQUFlO0lBS3hCLFlBQVksRUFBVSxFQUFFLElBQVksRUFBRSxLQUFrQjtRQUNwRCxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjtBQVZELDBDQVVDIn0=