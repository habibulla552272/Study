// const person ={
//     fname:'john',
//     lname:'Doe',
//     gefullName:function (){
//         return this.fname + ' ' + this.lname;
//     }



// }

// console.log(person.gefullName());
// person.fname= 'Habibulla'
// console.log(person.gefullName());



// add  data in object 
let user ={
    name:'john',
    age:30
};

// user.isAdmin =true;
// console.log(user);

// delete user.name;
// console.log(user);

// user['likes birds']= true;

// console.log(user);

// delete user['likes birds']

// console.log(user);

// let key =prompt('what do you want to know about the user ?','name');

// console.log(user[key]);
// let keys= 'name'
// console.log(user.keys);


// let fruit = prompt('which fruit to buy ?' ,'apple');
// let bag={
//     [fruit]:5,
// }
// console.log(bag.apple);

//property-names-limitations

let obj={
    for:1,
    let: 2,
    return:5,
    inAdmin:true
}
console.log(obj.for+obj.let+obj.return);

let obj2={
    0:'test'
}
console.log(obj2['0']);
console.log(obj2[0]);

// There’s also a special operator "in" for that.

console.log('age' in user);
console.log("name" in obj);
// Please note that on the left side of in there must be a property name. That’s usually a quoted string.



//object for  in

for(let key in  obj){
    console.log(obj[key]);
    
}

//object ordered-like-an-object

let codes={
    "33":'germany',
    '32':'switzerland',
    '1':'usa'
}
for(let code in codes){
    console.log(code);
    
}