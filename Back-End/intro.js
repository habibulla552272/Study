
// Asynchronous
// console.log(1);
// setTimeout(()=>{
//     console.log(2);
// },2000)
// console.log(3);

//sync work --> dependable task

// callback 

let fnd=['tamim','yamin','aminur','israfil','ibrahim','refat','roman'];

function addNewName(name,fn){
    setTimeout(()=>{
        fnd.push(name);
        fn();
    },2000)

}

function DisplaySortName(){
    setTimeout(()=>{
        fnd.map(item=>{
            console.log(item);
            
        })
    },1000)

}

addNewName('anas', DisplaySortName);



// callBack hell

function employ(){

    setTimeout(()=>{
        let employId=[1,2,3,4,5,6,7,8,9];
        setTimeout(()=>{
            let employdls={
                name:'habu',
                age:21,
                work:'developer',
                salary:'free'
            }
            console.log(employdls);
            setTimeout(()=>{
                for (let index = 0; index < employId.length; index++) {
                    
                     console.log(employId[index]);
                    console.log(employdls);
                    
                }
            },2000)
            
        },2000)
    },2000)
}

employ();