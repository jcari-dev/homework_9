const express = require('express');
const port = 3000;
const app = express();
const drinks = require('./models/drinks.js')
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
})

app.get('/drinks', (req, res) => {
    res.send(drinks);
})







app.listen(port, () => {
    console.log('01010111 01101111 01100001 01101000 00101100 00100000 01001000 01101001 00100000 01001110 01101111 01110010 01101001 00100001')
});