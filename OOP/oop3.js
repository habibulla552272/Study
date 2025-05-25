class person{
    constructor(fname,lname,age){
        this.first_Name = fname;
        this.last_Name= lname;
        if(age <=0 ){
            throw new Error("age must be greater than Zero")
        }
        this._age=age

    }
  get getFullName(){
        return this.first_Name + ' ' + this.last_Name + ' and my age is '+ this._age;
    }
    set age(value){
        if(value<=0){
            throw new Error('age must be greater than Zero');

        }else{
            this._age= value;
        }

    }

    
}

const p1=new person ('john','Doe',20);
p1.age= 21;
console.log(p1.getFullName);
