const person ={
    fname:'john',
    lname:'Doe',
    gefullName:function (){
        return this.fname + ' ' + this.lname;
    }

}

console.log(person.gefullName());
person.fname= 'Habibulla'
console.log(person.gefullName());


