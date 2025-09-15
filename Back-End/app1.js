const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        if (req.method == 'GET') {
            res.writeHead(200, { 'content-type': 'text/olaintext' });
            res.end("hello page");
        }
    } else if (req.url === '/api/users') {
        if (req.method === "GET") {
            res.writeHead(200, { 'content-type': 'application/json' });
            res.end("hello users");
        }
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
})


server.listen(PORT, () => {
    console.log(`server is runing http://localhost:${PORT}`);

})