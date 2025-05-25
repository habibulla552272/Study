class person {
    constructor(fname,lname){
        this.first_Name = fname;
        this.last_Name = lname;
        // this.extra_Name = ename;

    }
    getFullName(){
        return this.first_Name + " " + this.last_Name ;

    }
}

const p1= new person('john','Doe');
p1.first_Name= 'smith'
console.log(p1.getFullName());

const p2 = new person ('habibulla', 'Islam')

console.log(p2.getFullName());
