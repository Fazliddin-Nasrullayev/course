const { ApolloServer } = require('apollo-server') 
const modules = require('./module')
const PORT = 1251

console.log(modules);

const server = new ApolloServer({
    modules
})
const gp = server.graphqlPath


server.listen(PORT, _=> console.log(PORT + gp))