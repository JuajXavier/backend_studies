const mongoose = require('mongoose');

const user = 'jvitorxavier';
const password = 'xavier1996';
const database = 'todo_node';
const serverName = 'xavier.pqs8zcn.mongodb.net';

mongoose.set('strictQuery', false);

module.exports = {
    init: () => {
        mongoose.connect(
            `mongodb+srv://${user}:${password}@${serverName}/${database}?retryWrites=true&w=majority`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then((res) => console.log(`Connection Successful ${res}`))
        .catch((err) => console.log(`Error ${err}`));
    }
}