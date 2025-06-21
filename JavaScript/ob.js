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

// let user={
//     name:'john',
//     age:40,
//     sayHi(){
//         console.log(this.name);

//     }
// }

// user.sayHi();

// let admin=user;

// user=null

// console.log(admin);
// console.log(user);

// let user2={
//     name:'john'
// }
// let admin2={
//     name:'admin'
// }
// function sayHi(){
//     console.log(this.name);

// }
// user2.f=sayHi;
// admin2.f=sayHi;

// user2.f();
// admin2.f() 

//object-methods#arrow-functions-have-no-this

// let user3={
//     firstNmae:'habus',
//     sayHi(){
//         let arrow=()=> console.log(this.firstNmae);
//         arrow();        
//     }
// }

// user3.sayHi();


// Constructor,operator New  

// function User(name){
//     this.name=name;
//     this.isAdmin=false;
// }
// let user=new User('habu');

// console.log(user.name );
// console.log(user.isAdmin);

// OPtional Chaining ?.  
// let user={}
// console.log(user.address); //it is problem now what can i do 

// first we use if condition 

// console.log(user.address ? user.address.street :undefined);

// there's a little better way to write it useing the && operator 

// console.log(user.address && user.address.street && user.address.street.name);


// now use optional chaining 

// console.log(user.address?.street);

// other variants: ?.(),?.[]

// let userAdmin={
//     admin(){
//         console.log('i am admin');

//     }
// }
// let userGuest={};
// userAdmin.admin?.();
// userGuest.admin?.();


// let key = 'firstName';
// let user1={
//     firstName:'jhon',
// };
// let user3=null;
// console.log(user1?.[key]);
// console.log(user1);
// console.log(user3?.[key]);

// console.log(user3?.name='habu');
// user3 ?. name = 'habu';

// console.log(user3);

// console.log(user1);


// Symbol type 
// let id2 = Symbol('id2');
// let user = {
//     name: 'john',
//     [id2]: 21
// };
// let id = Symbol('id');
// user[id] = 1;
// console.log(user[id]);
// console.log(user[id2]);

// for (let key in user) console.log(key);

// .for('id') it is global registry 
// let id3 = Symbol.for('id');
// let id4 = Symbol.for('id');

// both symbols are from the same key in the global registry they are strictly equal.
// console.log(id3 === id4);

// let sym = Symbol.for('name');
// let sym2 = Symbol.for("id");
// console.log(Symbol.keyFor(sym));
// console.log(Symbol.keyFor(sym2));

/*The Symbol.keyFor internally 
uses the global symbol registry
 to look up the key for the symbol.
 So it doesn’t work for non-global
 symbols. If the symbol is not global,
 it won’t be able to find it and returns undefined. */

//  let globalsymbol=Symbol.for('names');
//  let localsymbol=Symbol('names2');
//  console.log(Symbol.keyFor(globalsymbol));
//  console.log(Symbol.keyFor(localsymbol));
// console.log(localsymbol.description);

 
// Object to primitive conversion 

let user={
    name:'john',
    money:1090,
    toString(){
        return `name: '${this.name}'`;
    },
    valueOf(){
        return this.money
    },

    // [Symbol.toPrimitive](hint){
    //     console.log(`hint:${hint}`);
    // return hint == 'string' ?    `{name: '${this.name}'  }`: this.money;
        
    // }
}
console.log(user);
console.log(+user);
console.log(user + 500);

let obj={
    toString(){
        return '2';
    }
}

console.log(obj * 2);
console.log(obj + 2);




