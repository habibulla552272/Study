let arr=new Array();
let arr2= [];

let fruits=['apple','orange','plum'];
console.log(fruits);

// we can replace an element 

fruits[1]='peapea';
console.log(fruits);

// or add a new one to the array using index like [index] 
fruits[4]='lemon';
console.log(fruits);
// index 3 is empty because we assigned a value to index 4 directly
console.log(fruits[3]); // undefined
console.log(fruits.length); // 5
 
// An array can store element of any type 

let arr3=['aapple',{name:'habibulla'},true,false,function(){console.log('Hello World');
}]

console.log(arr3[3]);

// js can't use [-1]

console.log(fruits[fruits.length -1]);

// we can use array.at(index)
console.log(fruits.at(-1));

