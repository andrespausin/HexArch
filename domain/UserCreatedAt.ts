export class UserCreatedAt {
    value: Date;

    constructor (value: Date){
        this.value = value;
    }

    private isVa;id (){
        if(this.value > new Date()){
            throw new Error('Invalid date')
        }
    }
}