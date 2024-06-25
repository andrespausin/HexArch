import { User } from "./User";
import { UserId } from "./UserId";

// The UserRepository interface is the contract that the implementation of the repository must follow. If it's used MySQL, MongoDB, or any other database, the implementation must follow this contract.
export interface UserRepository {
    create(user: User): Promise<void>;
    getAll(): Promise<User[]>;
    getOneById(id: UserId): Promise<User | null>;
    edit(user: User): Promise<void>;
    delete(id: UserId): Promise<void>;
}