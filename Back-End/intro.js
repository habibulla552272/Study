//path
// const path = require('path');
// const OS =require('os')
// const fs=require('fs')

// console.log(path.parse(__filename));
// console.log(path.parse(__dirname));

// console.log('file extension' + path.extname(__filename));

// //OS
// console.log(OS.version());
// console.log(OS.totalmem());
// console.log(OS.freemem());
// console.log(OS.cpus());

// //File System 
// fs.readFile(path.join(__dirname,'text.txt'),{encoding:'utf-8'},(data,err)=>{
//     if(err){
//         console.log(err);
        
//     }else{
//         console.log(data);
        
//     }
// })

// //file system write

// fs.writeFile(path.join(__dirname,'text.txt'),'this is a new data bro',(err)=>{
//   if(err){
//     console.log(err);
    
//   }else{
//     console.log('data saved');
    
//   }
    
    
// })


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

// addNewName('anas', DisplaySortName);



// callBack hell

// function employ(){

//     setTimeout(()=>{
//         let employId=[1,2,3,4,5,6,7,8,9];
//         setTimeout(()=>{
//             let employdls={
//                 name:'habu',
//                 age:21,
//                 work:'developer',
//                 salary:'free'
//             }
//             console.log(employdls);
//             setTimeout(()=>{
//                 for (let index = 0; index < employId.length; index++) {
                    
//                      console.log(employId[index]);
//                     console.log(employdls);
                    
//                 }
//             },2000)
            
//         },2000)
//     },2000)
// }

// employ();


//promis

const employeIDS= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([1,2,3,4,5,6,7])
    },2000)
})

function empBio(data){
    return new Promise((resolve,reject)=>{
        setTimeout((id)=>{
            let employeeBio={
                id:id,
                name:'habu',
                age:30,
                email:'add@gamil.com'
            }
            resolve(employeeBio)
        },2000,data[2])
    })
}
function empHistory(data) {

    
    return new Promise((resolve,reject)=>{
  
        setTimeout((id)=>{
           
         
   
               
            let employeHistory={
              
                exp : '6 year',
                position:['internship','jr eng' ,'mid eng', 'senior Eng']

            }
            resolve(employeHistory)
        },1000,data[3])
    })
    
}

// pormise
// employeIDS
//     .then(data =>{
//         console.log(data);

//         const bio= empBio(data)
//         bio
//             .then(data=>{
//                 console.log(data);
                
//                 const empHis= empHistory(data)

//                 empHis
//                        .then((data)=>{
//                         console.log(data);
                        
//                     })
//                     .catch((err)=>{
//                         console.log(err);
                        
//                     })
//             })
//             .catch((err)=>{
//                 console.log(err);
                
//             })
//     })
//     .catch((err) =>{
//         console.log(err);
        

//     })


//async

async function work() {
    const data= await employeIDS;
    console.log(data);

    const bio = await empBio(data);
    console.log(bio);

    const history= await empHistory(data)
    console.log(history);
    
    

    
}

work();