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
