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

// Method pop/Push,shift/unshift 
// this method change main arry 

console.log(fruits.pop());
console.log(fruits);

fruits.push('lemmon');
console.log(fruits);

fruits.unshift('lemon0-1');
console.log(fruits);


console.log(fruits.shift());
console.log(fruits);

// push or unshift can add multiple elements at onece 

fruits.push('orange2','peach');
fruits.unshift('pineapple','lemon4');

console.log(fruits);

let arr7=fruits;  //copy by reference 

console.log(arr7=== fruits);

arr7.push('pears');  //modify the array by reference 

console.log(fruits);

let fruits2=[];
fruits2[999]=5;
console.log(fruits2);
console.log(fruits2.length);
fruits2.age= 25;
console.log(fruits2);
console.log(fruits2.age);


// Loops 

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
    
}

// we can use also for...of 

for(let x of fruits){
    console.log('we use for...of');
    
    console.log(x);
    
}

// we can use also for ...in because arrays are also objects 

for(let x in fruits){
    console.log('we use for..in ');
    console.log(fruits[x]);
    
    
}


// a word about length 

console.log(fruits.length); //10 
console.log(fruits2.length); //1000

// we can use clear array like arr.length =0; 

console.log(arr3.length); //5

arr3.length =4; //last 1 clear 

console.log(arr3);
console.log(arr3.length); //4 






