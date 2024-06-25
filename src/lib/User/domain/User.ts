import { UserId } from "./UserId";
import { UserEmail } from "./UserEmail";
import { UserName } from "./userName";
import { UserCreatedAt } from "./UserCreatedAt";

export class User {
    id: UserId;
    name: UserName;
    email: UserEmail;
    createdAt: UserCreatedAt;

    constructor(id: UserId, name: UserName, email: UserEmail, createdAt: UserCreatedAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }
}