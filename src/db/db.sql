DROP TABLE  IF EXISTS course;
CREATE TABLE course(
    course_id SERIAL PRIMARY KEY,
    course_title VARCHAR(64) NOT NULL
);

DROP TABLE  IF EXISTS teacher;
CREATE TABLE teacher(
    teacher_id SERIAL PRIMARY KEY,
    teacher_name VARCHAR(64) NOT NULL,
    course INTEGER,
    FOREIGN KEY (course) REFERENCES course(course_id)
     ON DELETE CASCADE
);


DROP TABLE  IF EXISTS join_table;
CREATE TABLE join_table(
    course_id int REFERENCES course(course_id),
    teacher_id int REFERENCES teacher(teacher_id)
);
