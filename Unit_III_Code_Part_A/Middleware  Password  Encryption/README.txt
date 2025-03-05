1. Import Required Modules

const express = require('express');
const bcrypt = require('bcrypt');
express: Imports the Express framework, which is used to create a web server.
bcrypt: Imports the bcrypt library, which is used to hash and compare passwords.
2. Define Server Configuration

const port = 8002;
const host = 'localhost';
let hashedPass = '';
port = 8002: The server will listen on port 8002.
host = 'localhost': The server will run locally.
hashedPass = '': Stores the hashed password temporarily (not ideal for security, since it should be stored in a database).
3. Initialize Express App

const app = express();
Creates an instance of the Express app.
4. Set Up Middleware

app.set('view engine', 'ejs');

Purpose: Configures EJS (Embedded JavaScript) as the template engine for rendering 
dynamic HTML.

app.use(express.urlencoded({extended: false}));
Middleware: Parses application/x-www-form-urlencoded request bodies.
extended: false: Disables support for rich objects and arrays in URL-encoded form 
data.
5. Define Routes
Home Page Route

app.get('/', (req, res) => {
    res.render('index.ejs');
});
Handles GET requests to /.
Renders index.ejs (which should exist in the views/ directory).
Compare Page Route

app.get('/compare', (req, res) => {
    res.render('compare.ejs');
});
Handles GET requests to /compare.
Renders compare.ejs.
Hash Password Route

app.post('/hashPass', async (req, res) => {
    hashedPass = await bcrypt.hash(req.body.pass, 10);
    console.log(req.body.pass + '\n' + hashedPass);
    res.send('Hashed the pass');
});
Handles POST requests to /hashPass.
Hashes the password received from req.body.pass using bcrypt.hash().
10 is the salt rounds (determines hashing complexity).
Stores the hashed password in hashedPass (temporarily, not secure for production).
Logs both the plain text and hashed password.
Responds with 'Hashed the pass'.
Compare Password Route

app.post('/comparePass', async (req, res) => {
    let isEqual = await bcrypt.compare(req.body.pass, hashedPass);
    if (isEqual) {
        res.send('Equal');
        console.log(req.body.pass + '\n' + hashedPass);
    } else {
        res.send('Not Equal');
    }
});
Handles POST requests to /comparePass.
Compares the input password (req.body.pass) with the hashed password using bcrypt.compare().
If passwords match:
Sends 'Equal' as a response.
Logs both passwords.
If they don’t match:
Sends 'Not Equal'.
6. Start Server

app.listen(port, host, () => {
    console.log(`Server is Listening on http://${host}:${port}/`);
});
Starts the Express server on localhost:8002.
Logs the URL when the server starts.




app.post('/hashPass', async (req, res) => {
    hashedPass = await bcrypt.hash(req.body.pass, 10);
    console.log(req.body.pass + '\n' + hashedPass);
    res.send('Hashed the pass');
});
1. What This Code Does
This defines a POST route (/hashPass) that:

Accepts a password from the client (req.body.pass).
Hashes it using bcrypt with a salt round of 10.
Stores the hashed password in hashedPass.
Logs both the plain text password and hashed password to the console.
Responds with 'Hashed the pass' to the client.
2. Breaking It Down
(1) Route Definition

app.post('/hashPass', async (req, res) => {
app.post('/hashPass', ...): Defines a POST endpoint at /hashPass.
async (req, res) => {}:
Uses an async function because bcrypt hashing is an asynchronous operation.
req: Represents the request object (contains input data).
res: Represents the response object (used to send a response back to the client).
(2) Hashing the Password

hashedPass = await bcrypt.hash(req.body.pass, 10);
req.body.pass: Extracts the password from the request body.
bcrypt.hash(password, saltRounds):
Hashes the password using bcrypt.
10: Defines salt rounds, which determine the complexity of hashing.
The higher the number, the more secure but slower the hashing process.
await: Waits for bcrypt to complete hashing before moving forward.
hashedPass: Stores the hashed password (not secure for real applications!).
(3) Logging the Passwords

console.log(req.body.pass + '\n' + hashedPass);
Logs the original password and hashed password to the console.
Example output:

mypassword123
$2b$10$Q1GfT2ad1/WyfZK8mOdN9uxPcz1vU/7rj5RujUt5.UYZK7s0m12Di
⚠️ Security Issue: Logging passwords is dangerous in production!
(4) Sending Response

res.send('Hashed the pass');
Sends a simple text response ('Hashed the pass') to the client.
The client does not receive the hashed password (good practice).