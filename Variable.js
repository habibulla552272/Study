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


// arithmetic operators -> +,-,*,/,**,%

//Type Casting
//Type coersion

console.log(10 +  '5'); 
// answer = 105 
// + = Casting  
// because Type coercion 
// Number + Number = Addition
// String + Anything = String Concatenation

console.log(10 * '5');
// asnwer = 50 

console.log(10 - '5');
// answer = 5

console.log(10 / '5');
//answer = 2

console.log(15 % '2');
//answer 1

//Exponentiation **
console.log(2**4);
//answer 16

//Increment = ++ 
let a=1;
a++
console.log(a); //answer =2

console.log(a+=1); //answer = 3

// Decrement = --
let b=5;
b--;
console.log(b); //asnwer = 4 

console.log(b-=1); //asnwer = 3


//Comparison Operators

//Equal 
let c=5;
console.log(c== '5'); //answer true 
console.log(c=== '5'); //answer false because c=5 this is a number but '5' = string that's why this is a not ture

//Not equal !=,!==

console.log(5 != '5'); //answer false because 5 =number ans and '5' = string but value equal that's why false 
console.log(5 !== '5'); //answer true because 5 =number ans and '5' = string but value equal but's type not same that's why it's true

//Less then or Greater than 
console.log(5 >5); //answer = wrong greater than
console.log( 5>=5); //Answer = true  greater than or equal

console.log(5<3); //answer - false less than because 5 not less than 5 




















