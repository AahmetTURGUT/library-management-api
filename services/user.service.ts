import { UserListResponseDto } from "../dto";
import { User } from "../models/user.model";

export class UserService {
    constructor(
        private userEntity: typeof User,
    ) { }

    public async getUsers(): Promise<UserListResponseDto[]> {
        const users = await this.userEntity.findAll({
            attributes: ['id', 'name']
        });
        return users.map((user) => new UserListResponseDto(user));
    }


    public async createUser(name: string): Promise<void> {
        await this.userEntity.create({ name });
        return;
    }

    public async getUser(userId: number): Promise<User> {
        const user = await this.userEntity.findByPk(userId);
        if (!user) {
            throw new Error("User Not Found");
        }

        return user;
    }
}
