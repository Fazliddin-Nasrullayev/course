const model = require('./model')
const courseModel = require('../course/model')
module.exports = {
    Query: {
        teacher: async () => await model.findAll()
    },

    Mutation: {
            createTeacher: async (_, { name, course }) => {

            const teacher = await model.create(name, course)
            const join =  await model.join(course, teacher[0].teacher_id)
            console.log(teacher);
            console.log(join);
            return teacher
        }
    },

    Teacher: {
        id: t => t.teacher_id, 
        name: t => t.teacher_name, 
        course: t => t.course,
        kurs: async t => await courseModel.findCourse(t.course)
    }
}