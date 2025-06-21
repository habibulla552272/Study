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
