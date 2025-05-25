class Account {
    constructor(openingBalancer) {
        this.balance= openingBalancer;


    }
    getBalance(){
        return this.balance;
    }
    deposit(ammount){
        this.balance += ammount
    }
    widthdraw(ammount){
        if(ammount < this.balance && ammount > 300){
            this.balance -= ammount;
        }else {
            console.log("Insufficient Blance or Invalid Amount");
            
        }
    }
    
}

const ac1=new Account(1000);
const ac2= new Account(2000);
console.log(ac1.getBalance());
ac1.deposit(500);
console.log(ac1.getBalance());