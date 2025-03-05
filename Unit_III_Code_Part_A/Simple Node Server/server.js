//Importing the http module
const http = require("http")
//Creating Server
const server = http.createServer((req, res) => {
    //Sending the response
    res.write("This is the response from the Server")
    console.log("This is the response from the Server");
    res.end();
})

const host = 'localhost';
const port = 8000;
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
