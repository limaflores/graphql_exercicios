const express = require('express');
// const graphqlHTTP = require('express-graphql').graphqlHTTP;
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema');

const app = express();
const port = 3000;

// require('./orm/Companhia').findAll().then(resposta => {
//     console.log(resposta);
// });

// app.get('/', (req, res) => res.send('Hello World!'))

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
