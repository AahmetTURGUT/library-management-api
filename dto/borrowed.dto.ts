export class PastBorrowedDto {
    name: string;
    userScore: number;

    constructor(name: string, userScore: number) {
        this.name = name;
        this.userScore = userScore;
    }
}

export class PresentBorrowedDto {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export class BorrowedDto {
    past: PastBorrowedDto[];
    present: PresentBorrowedDto[];

    constructor(past: PastBorrowedDto[], present: PresentBorrowedDto[]) {
        this.past = past;
        this.present = present;
    }
}

export class UserBorrowedDto {
    id: number;
    name: string;
    books: BorrowedDto;

    constructor(id: number, name: string, books: BorrowedDto) {
        this.id = id;
        this.name = name;
        this.books = books;
    }
}