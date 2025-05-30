
//old object inheritance concept 

const user={
    name:'habibulla',
    gmail:'@habibullaislam'
}
const teacher={
    makeVideo:true,

}
const teachingSupport={
    inAvailable:false,
    name:'Habu'
}
const TASupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:teachingSupport
}

console.log(TASupport.name);

teacher.__proto__=user;
console.log(teacher.name);
console.log(teacher.gmail);

//morder syntax inheritance 
Object.setPrototypeOf(teacher,TASupport);
console.log(teacher.fullTime);



// new concept in class inheritance
class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} makes a noise.`);
    }
    
}

class Dog extends Animal{
    speak(){
        console.log(`${this.name} barks.`);
        
    }
    run(){
        console.log(`${this.name} runs ...`);

        
    }
}

class Cat extends Animal{
    speak(){
        console.log(`${this.name}  Meows...`);
        
    }
    sleep(){
        console.log(`${this.name} Sleep....`);
        
    }
}

const cat = new Cat('cat');
cat.speak()
cat.sleep()

const dog= new Dog('dog');
dog.speak();
dog.run();
