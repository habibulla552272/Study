String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}

const name = "Habibulla Islam Habib";
console.log(name.reverse());
const courseName = 'MERN Batch 04';
console.log(courseName.reverse());

Array.prototype.sum = function () {
    return this.reduce((acc, curr) => acc + curr, 0)
}

const numbers = [1, 3, 5, 7];
console.log(numbers.sum());

Array.prototype.even = function () {
    return this.filter(num => num % 2 === 0);
}
const number2 = [1, 3, 6, 7, 33, 10, 55];
console.log(number2.even());


//some add 

function createUser(name, scroe) {
    this.name = name
    this.scroe = scroe

}
createUser.prototype.increment = function () {
    this.scroe++
}
createUser.prototype.price = function (price) {
    this.price = price
}
createUser.prototype.printMe = function () {
    console.log(`score is ${this.scroe} `);

}
createUser.prototype.printPrice = function () {

    console.log(`${this.name} price is ${this.price}`);

}

const chai = new createUser('chai', 25);
const tea = new createUser('tea', 15);

chai.printMe();
chai.increment();
chai.price(50)
chai.printMe();
tea.printMe();
tea.price(100)
tea.printPrice()
chai.printPrice()


//prototype example

let myname = 'habibulla     ';
console.log(myname.length);
console.log(myname.trim().length);

let myheros = ['thor', 'iron man'];

let heroPower = {
    thor: 'stom brekar',
    ironMan: 'brain',
    getIronManPower: function () {
        console.log(`Iron Man Power is him ${this.ironMan}`);

    }


}


