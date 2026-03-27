// right now i learn arrow function 
function great(){
    return 'hello';
}
const great1=()=> 'hello'
console.log(great())
console.log(great1())

// 3. lexical this binding 

// let's co try it 
const person={
    name:'habibulla',
    great:function(){
        setTimeout(()=>{
            console.log('hello ,'+ this.name)
        },1000)
    }
}
person.great();

// normal function

const person2={
    name:'habibulla',
    great:function(){
        setTimeout(function(){
            console.log('hello,'+this.name)
        },100)
    }
}
person2.great()


// template literal
let h=`habibulla islam habibulla`;
console.log(h)