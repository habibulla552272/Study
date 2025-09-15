const http= require('http');
const PORT= 8080;

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/olaintext'});
    res.end("hello world");
})


server.listen(PORT,()=>{
    console.log(`server is runing http://localhost:${PORT}`);
    
})