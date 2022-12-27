const { fetchdata } = require('../../utils/postgres');

module.exports = {
    findAll: () => fetchdata(`SELECT * FROM course`),
    create: (title) => fetchdata(`insert into course(course_title) values($1) returning *`, title),
    findCourse: (id) => fetchdata(`select * from course where course_id = $1 `, id)
}