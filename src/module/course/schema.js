const { gql } = require('apollo-server')


export default gql`
    type  Course {
        id: ID!
        title: String!
    }

    type Query {
        course: [ Course ]!
    }

    type Mutation {
        createCourse(title: String!): Course!
    }


`