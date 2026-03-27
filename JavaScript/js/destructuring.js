// array destructuring 
const number = [10, 22, 33, 34];
const [a, b, c] = number;
console.log(a, b, c);
// you can also skip element and use default value use rest syntax...

const colors = ['red', 'green', 'blue', 'yellow'];
const [firstcolor, , thirdcolor, ...reminingColor] = colors;

console.log(thirdcolor, firstcolor, reminingColor)
const [x, y, z = 0] = [1, 2];
console.log(z)

// object destructuring

const person = {
    name: 'alice', age:
        20
};
const {name,age}=person
console.log(name);
console.log(age);

const product={
    id:1,
    details:{
        price:50,
        category:'electronics'
    },
    name:'mobile'
}
const {id,details:{price:productprice,category}}=product;
console.log(id);
console.log(productprice)
console.log(category);
