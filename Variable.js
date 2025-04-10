// var 
// var variable we can use multipul declear or assinment 
// and var variable is functional scoping

var va= 'this is var variable'

console.log(va);
var va= 15;
console.log(va);

// let 
// let is block scoping
let le = 'this is let variable '
console.log(le);
//let variable   can't be use multipur declear 

// let le = 15
//let can be reassigntment
le=15
console.log(le);

 
// const 
// const is block scoping
//const con't be reassingment

const cons= 'this is const variable'
console.log(cons);
// cons =15; it can not be work 
console.log(cons);

// non premitive data type 

// object 
// objects are mutable 
//mutable ,they are addressed by reference,not by value.

const obj= {
    fistName:'habib',
    lastName:'islam',
    age:25,
    work:'bekar'

}

console.log(obj);
const obj2= obj;
console.log(obj2);

 obj2.work= 'pro bekar'
 obj2.age=31;
 console.log(obj);
 console.log(obj2);

 //if we are change our copy object value .when also chenge main object value or key
 
 obj2['fistName']='habu';
 console.log(obj2);
 console.log('log obj',obj);
 
console.log('good bye bondhura ...');






