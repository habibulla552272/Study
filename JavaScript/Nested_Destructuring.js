
const student ={
    firstname: 'iftekar',
    lastname:'alam',

    grades:{
        english:58,
        maths:55,
    }
}

const {firstname:name, grades: {maths,english:eng} }=student;

console.log(maths);
console.log(eng);

