let message='hello';

console.log(message);

// let message= 'goodbay';  // Error: variable already declared
console.log(message);

if(true){
    let phrase='hello';
    console.log(phrase);
    
}

// console.log(phrase); // error ,no such variable

// Nested function 

function sayHiBye(firstname,lastName){
    function getFullname(){
        return firstname + ' ' + lastName;
    }
    console.log('hello , ' + getFullname());
   console.log('bye , ' + getFullname());

    
}
sayHiBye('habu','labu')

function makeCounter(){
    let count =0;
    return function (){
        return count++;
    };
}
let counter=makeCounter();

console.log(counter()); //0
console.log(counter()); //1
console.log(counter()); //2

function secretCounter() {
    let count = 0; // private

    return {
        increment: function() { count++; console.log(count); },
        decrement: function() { count--; console.log(count); }
    };
}

const counters = secretCounter();
counters.increment(); // 1
counters.increment(); // 2
counters.decrement(); // 1

console.log(counter.count); // undefined (can't access directly)



function f(name = "Habib") {
    return function() {
        console.log("Hi " + name);
    };
}

const greet = f();
greet(); // "Hi Habib"  <-- closure keeps `name` alive

