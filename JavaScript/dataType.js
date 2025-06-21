// Methods of primitives 

let str= 'hello';
console.log(str.toUpperCase());
let n=1.33253;
console.log(n.toFixed(2));

console.log(typeof 0);
console.log(typeof new Number(0));

let zero=new Number(0);
if(zero){
    console.log('zero is truthy ?????');
    
}

let billion=1000000000000;
console.log(billion);
billion=1_031_320_39329;
console.log(billion);

billion=1e9;
console.log(billion);
billion=9.3e9;
console.log(billion);
billion=1e-5;
console.log(billion);

// hex binary and octal number 
console.log(0xff);
let a=0b1111111;
console.log(a);
let b=0o377;
console.log(a==b);

// toString(base) 
let num=255;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));

// If we placed a single dot: 123456.toString(36), then there would be an error  
// Also could write (123456).toString(36). 

// Rounding 
let floors= 3.1;
console.log(Math.floor(floors));
let ceils=2.1;
console.log(Math.ceil(ceils));
let rounds=2.4;
console.log(Math.round(rounds));
rounds=3.5;
console.log(Math.round(rounds));

let truncs=-1.442;
console.log(Math.trunc(truncs));

// Imprecise calculations 
console.log(1e500);

console.log(0.1+0.2);

console.log(0.1.toString(2));

console.log(0.1.toFixed(20));

// TESTS:isFinite adn isNAN  

console.log(isNaN(NaN));
console.log(isNaN('strs'));
console.log(NaN=== NaN);

console.log(isFinite('15'));
console.log(isFinite('strs'));
console.log(isFinite(Infinity));

// let nums=prompt('enter number')

// console.log(isFinite(nums));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN('str'/2));
console.log(Number.isNaN('str'));
console.log(isNaN('str'));



