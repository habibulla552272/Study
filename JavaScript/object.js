// global object 
// console.log('Hello man how are you');
// var h = 5;
// alert('how are you')
// window.alert('hello');
// alert(window.h);


// Function object NFE 

// function sayhi() {
//     console.log('hi');

// }

// console.log(sayhi.name);



function f(sayhi= function() {}){
    console.log(sayhi.name);
    
}

f();


let user ={
    sayhi(){

    },
    saybye:function(){

    }
}


console.log(user.saybye.name);
console.log(user.sayhi.name);

let arr=[function(){}];
console.log(arr[0].name);

function f1(a){

}
function f2(a,b){}
function many(a,b,...more){

}

console.log(f1.length);
console.log(f2.length);
console.log(many.length);


function ask(ques,...hand) {
    let isYes=confirm(ques);
    for(let han of hand){
        if(han.length == 0){
            if(isYes) han();
        }else{
            han(isYes)
        }
    }
    
}

ask('Question',()=> console.log('you said yes'),result=> console.log(result));


function sayhi2(){
    
}