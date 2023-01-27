const app = require('./app');
const db = require('../src/mongoosedb');

db.init();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Rodando na porta 3000');
});

