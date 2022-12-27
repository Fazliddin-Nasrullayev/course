const model = require('./model')
const teacherModel = require('../teacher/model')
module.exports = {
    Query: {
        course: async () =>  await model.findAll()
    },

    Mutation: {
        createCourse: async (_, { title }) => {
            console.log(await model.create(title));
            return await model.create(title)
        }
    },

    Course: {
        id: g => g.course_id,
        title: g => g.course_title,
        teacher: async g => await teacherModel.findByCourse(g.course_id)
    }
}