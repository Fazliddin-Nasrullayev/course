const model = require('./model')

module.exports = {
    Query: {
        course: async () =>  await model.findAll()
    },

    Mutation: {
        createCourse: async (_, { title }) => {
            return await model.create(title)
        }
    },

    Course: {
        id: c => c.course_id,
        title: c => c.course_title
    }
}