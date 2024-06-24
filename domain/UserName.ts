export class UserName {
    value: string;

    constructor(value: string) {
        this.value = value;
        this.isValidName();
    }

    private isValidName (){
        if(this.value.length < 3){
            throw new Error('Invalid name')
        }
    }
}