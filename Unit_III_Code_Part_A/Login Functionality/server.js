const express = require('express');
//const bcrypt = require('bcrypt');
const app = express();

app.set('view engine', 'ejs');

// Set up middleware to parse request bodies
app.use(express.urlencoded({ extended: false }));

// Serve static files from the public directory
app.use(express.static('./public'));

// Route to serve the login form
app.get('/', (req, res) => {
    res.render('index.ejs');
});

// Route to handle login form submission
app.post('/index', (req, res) => {
    const { email, password } = req.body;

    // Perform authentication here
    // For simplicity, we'll use hard-coded credentials
    const validEmail = 'admin@gmail.com';
    const validPassword = '123';

    if (email === validEmail && password === validPassword) {
        res.redirect('/dashboard');
    } else {
        res.send('Invalid Email or password.');
    }
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard.ejs');
});

// Start the server
const port = 5001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});