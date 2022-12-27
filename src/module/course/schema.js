const { gql } = require('apollo-server')


module.exports =  gql`
    type  Course {
        id: ID!
        title: String!
        teacher: [ Teacher ]!
    }

   extend type Query {
        course: [ Course ]!
    }

   extend type Mutation {
        createCourse(title: String!): [Course!]
    }


`