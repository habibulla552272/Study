let userName:string ='Habibulla';
let age:number= 21;
let isStudent:boolean= true;
console.log(`Hello my name is ${userName}, I am ${age} years old student : ${isStudent}`);

function greet(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("Rafi", 20));

type ButtonProps = {
  label: string;
  onClick: () => void;
};

