const { gql } = require('apollo-server')


// courses: [ Course ]!
module.exports =  gql`
    type  Teacher {
        id: ID!
        name: String!,
        course: Int!,
        kurs: [ Course ]!
    }

    extend type Query {
        teacher: [ Teacher ]!
    }

    extend type Mutation {
        createTeacher(name: String!, course: Int!): [Teacher!]
    }


`