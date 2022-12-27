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
        id: c => c.course_id,
        title: c => c.course_title,
        teacher: async c => await teacherModel.findByCourse(c.course_id)
    }
}