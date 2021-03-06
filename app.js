const express = require('express');
const app = express()

// Set where we want to port our site
app.listen(8080);

// To use ejs we use this
app.set('view engine', 'ejs');

// To use static files
app.use(express.static('public'));

// home page
app.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
})

//about page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})

// contact page
app.get('/contact-me', (req, res) => {
    res.render('contact', { title: 'Contact' });
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
})