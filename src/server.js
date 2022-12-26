const { ApolloServer } = require('apollo-server') 
const modules = require('./module')
const PORT = 1251

console.log(modules);

const server = new ApolloServer({
    modules
})

server.listen(PORT, err => 
    err ? console.log(err) : console.log( PORT + server.graphqlPath )
 )