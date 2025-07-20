// // var function scoped 
// if (true) {
//   var x = 10;
// }
// console.log(x); // 10 (accessible outside block)
// var y;
// console.log(y);
// // initialized =undefined 
// let c;
// console.log(c);
// if(true){
//     let b=9;

// }
// // console.log(b); can not access 


// const z=30;
// console.log(z);
// // z=300; can not re assigin 

// const arr=[33,2222];
// arr.push(3939)
// console.log(arr);


const element = document.querySelector('#h2')



const btn=document.getElementById('btn')
btn.addEventListener('click',()=>{
    
    element.style.color='red'
    
})