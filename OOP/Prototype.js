String.prototype.reverse =function (){
    return this.split("").reverse().join("");
}

const name="Habibulla Islam Habib";
console.log(name.reverse());
const courseName='MERN Batch 04';
console.log(courseName.reverse());

Array.prototype.sum=function (){
    return this.reduce((acc,curr)=> acc+curr ,0)
}

const numbers =[1,3,5,7];
console.log(numbers.sum());

Array.prototype.even= function(){
    return this.filter(num=> num%2 === 0 );
}
const number2=[1,3,6,7,33,10,55];
console.log(number2.even());



