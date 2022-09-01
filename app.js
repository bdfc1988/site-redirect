const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/quadratics', (req, res) => {res.redirect('/index.html')});
app.get('/circles', (req, res) => {res.redirect('/index.html')});
app.get('/coordinategeometry', (req, res) => {res.redirect('/index.html')});
app.get('/series', (req, res) => {res.redirect('/index.html')});
app.get('/binomial', (req, res) => {res.redirect('/index.html')});
app.get('/functions', (req, res) => {res.redirect('/index.html')});
app.get('/differentiation', (req, res) => {res.redirect('/index.html')});
app.get('/integration', (req, res) => {res.redirect('/index.html')});
app.get('/circularmeasure', (req, res) => {res.redirect('/index.html')});
app.get('/trigonometry', (req, res) => {res.redirect('/index.html')});
app.get('/register', (req, res) => {res.redirect('/index.html')});
app.get('/questions', (req, res) => {res.redirect('/index.html')});







const PORT = process.env.PORT || 3000;

app.listen(
    PORT,
    console.log(
      `Server is running on port ${PORT}`
    )
  );