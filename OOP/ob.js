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
// let user ={
//     name:'john',
//     age:30
// };

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

// let obj={
//     for:1,
//     let: 2,
//     return:5,
//     inAdmin:true
// }
// console.log(obj.for+obj.let+obj.return);

// let obj2={
//     0:'test'
// }
// console.log(obj2['0']);
// console.log(obj2[0]);

// There’s also a special operator "in" for that.

// console.log('age' in user);
// console.log("name" in obj);
// Please note that on the left side of in there must be a property name. That’s usually a quoted string.



//object for  in

// for(let key in  obj){
//     console.log(obj[key]);
    
// }

//object ordered-like-an-object

// let codes={
//     "33":'germany',
//     '32':'switzerland',
//     '1':'usa'
// }
// for(let code in codes){
//     console.log(code);
    
// }

// let user={
//     name:'john',
//     age:30

// };
// let admin= user;
// admin.name ='pete';
// console.log(user.name);



// Cloning and merging, Object.assign

// let clone={};

// for(let key in user){
//     clone[key]=user[key];
// }
// console.log(clone);

// let clone2={};

// Object.assign(clone2, user);
// console.log(clone2);


// Nested cloning

// let user2={
//     name:"habu",
//     age:21,
//     sizes:{
//         height: "5.9 fit",
//         weight: "64 kg"
//     }
// }

// let strClone= structuredClone(user2);
// strClone.sizes.height='5 fit 10 inchie'
// console.log(strClone);
// console.log(user2);




// garbage collection 
//  function marry(man,woman){
//     woman.husband=man;
//     man.wife=woman;
//     return{
//         father:man,
//         mother:woman
//     }
// }

// let family= marry({
//     name:'john'
// },{
//     name:'Ann'
// }
// )

// console.log(typeof family.father);
// console.log(family.father.wife.husband.wife);

// delete family.father;

// console.log(family.mother.husband)
// delete family.mother.husband;
// console.log(family.mother.husband)


// object methods this 

let user={
    name:'john',
    age:40,
    sayHi(){
        console.log(this.name);
        
    }
}

user.sayHi();

let admin=user;

// user=null

console.log(admin);
console.log(user);

let user2={
    name:'john'
}
let admin2={
    name:'admin'
}
function sayHi(){
    console.log(this.name);
    
}
user2.f=sayHi;
admin2.f=sayHi;

user2.f();
admin2.f() 

//object-methods#arrow-functions-have-no-this

let user3={
    firstNmae:'habus',
    sayHi(){
        let arrow=()=> console.log(this.firstNmae);
        arrow();        
    }
}

user3.sayHi();