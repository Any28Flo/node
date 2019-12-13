//http : Launch a server, send requests
//https : Launch a SSL server
const http = require('http');

const server = http.createServer((req , res) =>{
    console.log(`Some has requeseted ${req.url}`);
    console.log(req.method)
         if(req.url === '/'){
         res.write("<html>");
         res.write("<head><title>Hello</title></head>");
         res.write("<body><h1>Hello from my Node.js</h1></body>");
         res.write("</html>");
         res.end();
        
     }else if (req.url == '/about'){
         res.write("My name is about");
         res.end();
     }else{
         res.statusCode = 404;
         res.write(" 404 Page");
         res.end();
     }
    
});

server.listen(3000);