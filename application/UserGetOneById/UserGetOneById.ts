import { UserRepository } from "../../domain/UserRepository";
import { UserId } from "../../domain/UserId";
import { User } from "../../domain/User";
import { UserNotFoundError } from "../../domain/UserNotFoundError";

export class UserGetOneById {
    constructor ( private repository: UserRepository) {}

    async run(id: string): Promise<User>{
        const user = await this.repository.getOneById(new UserId(id));

        if(!user) throw new UserNotFoundError("User not found");

        return user;
    }
}