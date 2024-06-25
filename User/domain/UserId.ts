export class UserId {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.isValidId();
    }

    private isValidId (){
        if(this.value.length < 10) {
            throw new Error('Invalid id')
        }
    }
}