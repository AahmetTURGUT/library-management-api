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
exports.UserService = void 0;
const dto_1 = require("../dto");
class UserService {
    constructor(userEntity) {
        this.userEntity = userEntity;
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userEntity.findAll({
                attributes: ['id', 'name']
            });
            return users.map((user) => new dto_1.UserListResponseDto(user));
        });
    }
    createUser(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userEntity.create({ name });
            return;
        });
    }
    getUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userEntity.findByPk(userId);
            if (!user) {
                throw new Error("User Not Found");
            }
            return user;
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLGdDQUE2QztBQUc3QyxNQUFhLFdBQVc7SUFDcEIsWUFDWSxVQUF1QjtRQUF2QixlQUFVLEdBQVYsVUFBVSxDQUFhO0lBQy9CLENBQUM7SUFFUSxRQUFROztZQUNqQixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2dCQUN4QyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO2FBQzdCLENBQUMsQ0FBQztZQUNILE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSx5QkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7S0FBQTtJQUdZLFVBQVUsQ0FBQyxJQUFZOztZQUNoQyxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN2QyxPQUFPO1FBQ1gsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLE1BQWM7O1lBQy9CLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDUCxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7YUFDckM7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO0tBQUE7Q0FDSjtBQTFCRCxrQ0EwQkMifQ==