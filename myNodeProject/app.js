// Student Name: Naga Sindhuri Munjila
// Student ID: 1225912742
// Due Date: 02/04/2024

const express = require('express');
const app = express();
const port = 3000;

//Parse incoming request bodies.
app.use(express.urlencoded({extended : true }));

//Set EJS as templating engine
app.set('view engine', 'ejs');

//Serve the form
app.get('/', (req,res) => {
    res.render('form');
});

//Handle form submissions
app.post('/submit', (req,res) => {
    console.log(req.body); //This will log form data to console
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
