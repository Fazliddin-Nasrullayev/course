const { fetchdata } = require('../../utils/postgres');

module.exports = {
    findAll: () => fetchdata(`SELECT * FROM teacher`),
    findByCourse: (id) => fetchdata(`SELECT * FROM teacher WHERE course = $1`, id),
    create: (name, course) => fetchdata(`insert into teacher(teacher_name, course) values($1, $2) returning *`, name, course),
    join: (course_id , teacher_id) => fetchdata(`insert into join_table(course_id, teacher_id) values($1, $2) returning *`, course_id, teacher_id),
}

