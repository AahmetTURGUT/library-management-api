import { User } from "../models/user.model";

export class UserListResponseDto {
    id: number;
    name: string;

    constructor(book: User) {
        this.id = book.id;
        this.name = book.name;
    }
}