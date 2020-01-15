USE EastLaos;

-- PRIMITIVE
DROP TABLE IF EXISTS student;
CREATE TABLE student (
  id        int(32) NOT NULL,
  email     varchar(256) NOT NULL,
  password  varchar(256) NOT NULL,
  CONSTRAINT uaStudent UNIQUE(id, email)
);

DROP TABLE IF EXISTS tutor;
CREATE TABLE tutor (
  id        int(32) NOT NULL,
  email     varchar(256) NOT NULL,
  password  varchar(256) NOT NULL,
  CONSTRAINT uaTutor UNIQUE(id, email)
);

DROP TABLE IF EXISTS course;
CREATE TABLE course (
  id        int(32) NOT NULL,
  code      varchar(8) NOT NULL,
  name      varchar(256) NOT NULL,
  CONSTRAINT uaCourse UNIQUE(id, code)
);

-- MATCHING

DROP TABLE IF EXISTS studentmatch;
CREATE TABLE studentmatch (
  studentId int(32),
  courseId  int(32),
  FOREIGN KEY (studentId) REFERENCES student(id),
  FOREIGN KEY (courseId) REFERENCES course(id)
);

DROP TABLE IF EXISTS tutormatch;
CREATE TABLE tutormatch (
  tutorId   int(32),
  courseId  int(32),
  FOREIGN KEY (tutorId) REFERENCES tutor(id),
  FOREIGN KEY (courseId) REFERENCES course(id)
);

DROP TABLE IF EXISTS matching;
CREATE TABLE matching (
  studentId int(32),
  tutorId   int(32),
  courseId  int(32),
  FOREIGN KEY (studentId) REFERENCES student(id),
  FOREIGN KEY (tutorId) REFERENCES tutor(id),
  FOREIGN KEY (courseId) REFERENCES course(id)
);

-- QUIZ

DROP TABLE IF EXISTS quiz;
CREATE TABLE quiz (
  id        int(32) NOT NULL,
  courseId  int(32),
  content   varchar(1024),
  CONSTRAINT uaQuiz UNIQUE(id)
);

DROP TABLE IF EXISTS mark;
CREATE TABLE mark (
  quizId    int(32),
  studentId int(32),
  mark      int(32),
  FOREIGN KEY (quizId) REFERENCES quiz(id),
  FOREIGN KEY (studentId) REFERENCES student(id)
);