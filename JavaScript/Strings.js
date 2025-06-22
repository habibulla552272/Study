let single='single-quoted';
let double="double-quoted";
let backticks=`backticks`;

function sub(a,b){
    return a+b;

}
console.log(`1+2=${sub(1,2)}.`);
// Another advantage of using backticks is that they allow a string to span multiple lines: 

let guestList=`Guests:
*john
*pete
*Mary
`;
console.log(guestList); 
// Answere Guests:
// *john
// *pete
// *Mary

// Special characters 

// newLine  Charecter /n 
let guestList2="Guests:\n *mary\n *pete\n *habu";
console.log(guestList2);


// String Length 

console.log(`My/n`.length);


// Accessing Characters 

let str='hello';
console.log(str[0]);
console.log(str.at(0));

// at method has a benefit of allowing negetive position 

console.log(str[str.length-1]);
console.log(str.at(-1));

console.log(str[-1]); //undefined

for(let char of str){
    console.log(char);
    
}

// Strign are Immutable 
 
let str2= 'Hi';
str2[0]='h';
console.log(str2);
console.log(str2[0]);

str2='h' + str2[1];
console.log(str2);



// changing the case 

console.log('Interface'.toUpperCase());
console.log('INTERFac'.toLowerCase());

// Searching for a Substring 

// indexOf 

let search= 'Widget with id';
console.log(search.indexOf('w'));
console.log(search.indexOf('with'));
console.log(search.indexOf('id'));


// inCludes method
console.log(search.includes('Widget'));
console.log(search.includes('with'));

// starWith method 

console.log(search.startsWith('Widget'));
console.log(search.startsWith('with'));

// endWith method
console.log(search.endsWith('id'));
console.log(search.endsWith('with'));

let x= search.slice(0,6);

console.log(search.slice(0,2));
console.log(search.slice(0,5));
console.log(search);
console.log(x);

console.log(search.substr(7,12));
console.log(search);

// Comparing String 

console.log('a'>'Z');
console.log('Z'>'A');
console.log('ster' > 'stereer');

let com= 'Zealand';
let com2='Osterreich';

for(let x in com){
    console.log(`com  ${com[x]}`);
    console.log(x.codePointAt());
    
}
for(let x in com2){
    console.log(`com 2 ${com2[x]}`);
    console.log(x.codePointAt());
    
}

for (let index = 62; index < 92; index++) {
    console.log(String.fromCodePoint(index));
    
    
}










