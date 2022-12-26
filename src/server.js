const { ApolloServer } = require('apollo-server') 
const PORT = 1251
const server = new ApolloServer({

})

server.listen(PORT, err => 
    err ? console.log(err) : console.log( PORT + server.graphqlPath )
 )