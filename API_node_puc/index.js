const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Teste GET');
});

app.post('/', (req, res) => {
    res.send('Teste POST');
});

app.put('/', (req, res) => {
    res.send('Teste PUT');
});

app.delete('/', (req, res) => {
    res.send('Teste DELETE');
});

app.listen(port, () => {
    console.log('Rodando na porta 3000');
});