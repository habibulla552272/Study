// spread :expands an iterable into individual ElementInternals.
// rest:collect individual elements into an array 

// spread operator 

const arr1=[1,3,4];
const arr2=[...arr1,22,1]
console.log(arr2)
// const arr3= ...arr1;
// console.log(arr3)
const merged= [...arr1,...arr2];
console.log(merged);
// object copy 

const obj1= {name:'habibulla'};
const obj2={...obj1};
console.log(obj2)
const objmerge={...arr1,...obj1,...obj2};
console.log(objmerge);



// rest 

function sum(...number){
    console.log(number);
    return number.reduce((total,num)=> total +num,0);
}
console.log(sum(1,2,5,2,4));

// array destructuring rest

const [first,...rest]= [19,22,33,44];
console.log(first,rest);

// object destructuring rest 

const user= {name:'habibula',age:22,country:'bangladesh'};
const {name,...others}=user;
console.log(name);
console.log(others)