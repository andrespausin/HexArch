export class UserEmail {
    value: string;

    constructor (value: string){
        this.value = value;
        this.isValid();
    }

    private isValid (){
        if(!/^\S+@\S+\.\S+$/.test(this.value)){
            throw new Error('Invalid email');
        }
    }
}