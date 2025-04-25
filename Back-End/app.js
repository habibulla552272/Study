const express = require('express')
const { log } = require('node:console')
const { start } = require('node:repl')

const app= express()
app.use(express.json())

let users =[
    {
        id:1,
        name:'habib',
        email:'habibulla@gmail.com'
    },
    {
        id:1,
        name:'habibulla',
        email:'habibullaislam@gmail.com'
    }
]


// app.get('/user/:id',(req,res)=>{
//     console.log(req.params);
//     const {id}= req.params;

//     res.json({
//         message:'this is id',
//         id

//     })
    
// })

//get in all data
app.get('/user',(req,res)=>{
    res.json({
      
        status:true,
        users
    })
    console.log('Hello World');
    
})
//get in specific id data
app.get('/user/:id',(req,res) => {
    const {id}= req.params;
    let user;
    for(let i=0;i<users.length;i++){
        if(users[i].id == id){
            user = users[i]
            break;
        }   
    }
    res.json({
        status:true,
        user,
    })
})

//post



//post

app.post('/user',(req,res)=>{
    console.log(req.body);
    const {name,email}= req.body;
    const id= users.length +1;
    let newUser={id,name,email}
    users.push(newUser)
    res.json({
        status:true,
        users,
    })
    
})
app.patch('/user/:id',(req,res)=>{
    
    const {id}= req.params
    for (let i=0;i<users.length;i++){
        if(users[i].id == id){
            users[i].email=req.body.email;
        }
    }
    res.json({
        message:'user is update',
        users
    })
    
})

//delete
app.delete('/user/:id',(req,res)=>{
    console.log(req.params);
    
    const {id}=req.params
    users =users.filter(user=>{
        return user.id != id
    })
    res.json({
        status:true,
        users
    })
})


app.listen(9000,()=>{
    console.log('server is running....');
    
})




