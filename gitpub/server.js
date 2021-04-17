const express = require('express');
const port = 3000;
const app = express();
const drinks = require('./models/drinks.js')
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (req, res) => {
    res.render('index.ejs', {
        allDrinks: drinks
    })
})
app.get('/drinks/:id', (req, res) => {
    res.render('show.ejs', {
        drinks: drinks[req.params.id]
    })
})




app.listen(port, () => {
    console.log('01001101 01110101 01100001 01101000 01100001 01101000 01100001 00100000 01001110 01101111 01110010 01101001 00100000 01110111 01101000 01111001 00100000 01111001 01101111 01110101 00100000 01101011 01100101 01100101 01110000 00100000 01110100 01110010 01100001 01101110 01110011 01101100 01100001 01110100 01101001 01101110 01100111 00100000 01110100 01101000 01100101 01110011 01100101 00100000 01010101 01010111 01010101')
});