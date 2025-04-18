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



// JavaScript Bitwise Operators
// Operate on the binary representation of numbers.
// |	
// OR	Sets each bit to 1 if one of two bits is 1
console.log(5|1);

//&	AND	Sets each bit to 1 if both bits are 1
console.log(5 & 1);

// ~	NOT	Inverts all the bits
console.log(~5);

// <<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
console.log(5 << 1);

// ^	XOR	Sets each bit to 1 if only one of two bits is 1
console.log(5 ^ 1);
// >>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
console.log(5 >> 1);

// >>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off
console.log(5 >>> 1);

// String Operator
// Concatenation (+)
let str1= 'habib'
let str2= 'islam'
let str3= str1 +' ' + str2;
console.log(str3);

// Ternary Operator
// Syntax: condition ? expression_if_true : expression_if_false
 
let Ternary= 1>2 ? 'habibulla': 'Islam';
console.log(Ternary); // outpur is Islam because condition is false and 2 grater than 1 

// 10. Relational Operators
// instanceof – Checks if an object is an instance of a specific class or constructor.
console.log(42 instanceof Number);
console.log(new Number(42) instanceof Number);
let inst=new Number(42)
console.log(typeof inst); //object new create new object 


// 🔹 Types of Array Operations:

const arr =[1,2,4,5,6,7];

arr.splice(2,3,9,10)
console.log(arr);
arr.splice(0,0,'habu','sabu')
console.log(arr);


// b. Searching

let arr2=[1,3,5,7,9,11,,5,13];

let indexofV= arr2.indexOf(5,0)+1;
console.log(indexofV);


console.log(arr2.includes(5));

//Find() method
// The find() method returns the value of the first array element that passes a test function.
function myfunction(value){
    return value >9;
}

let find=arr2.find(myfunction);

document.getElementById('demo').innerHTML = 'first number over 9 is ' + find;

//findlast 
// findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.

const temp= [27,50,30,40,42];
let high = temp.findLast(x => x > 40)
console.log(high);

// let gran=['megnas','setu','habibulla','habu'];

// for(let i=1;i<=gran.length;i++){

//     console.log(gran[i]);
    
// }


// 🧠 What is the work (role) of thisValue in JavaScript map()?
const multipul={
    factor:10,
    multiply(arr){
        return arr.map(function(num){
            return num * this.factor;
        },this)
    }
}
console.log(multipul.multiply([1,3,3]));

const multiplier ={
    factor:10,
    multiply(arr){
        return arr.map(function(num){
            return num * this.factor;
        })
    }
}


console.log(multiplier.multiply([1,3,4]));

// ✅ What is filter()?
// The filter() method is used to create a new array that contains only the elements that pass a test (condition).


const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // [2, 4]




let gran=['megnas','setu','habibulla','habu'];

for(let i=0;i<gran.length;i++){

    gran[i]= 'GM'+ ' ' + gran[i]
    
}
console.log(gran);


// 📘 JavaScript reduce()
// ✅ What is reduce()

// const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc,curr)=>{
    return acc= acc+curr;
},0)
    

console.log(sum);


// 📘 JavaScript sort() — Note
// ✅ What is sort()?
// The sort() method in JavaScript is used to sort the elements of an array in place. By default, it sorts values as strings in ascending order.
const sorts=[55,33,22,77,3,31,];
const sorts1=[10, 5, 2, 20];


sorts.sort();
console.log(sorts);

sorts1.sort();
console.log(sorts1);

sorts.sort((a,b)=>{
   return  a-b;
});
console.log(sorts);

sorts1.sort((a,b)=>{
    return a-b;
});
console.log(sorts1);

// 📘 JavaScript reverse() —
// ✅ What is reverse()?
// The reverse() method reverses the order of elements in an array. It modifies the original array — the first element becomes last, and the last becomes first.
const reverses=[1,2,4,5,6,7,8,9];
reverses.reverse();
console.log(reverses);

const word='habibulla islam habib'

const reversed= word.split('').reverse().join('');
console.log(reversed);
console.log(word);



console.log(012);
