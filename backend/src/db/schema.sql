USE EastLaos;

DROP TABLE IF EXISTS matching;
DROP TABLE IF EXISTS tutormatch;
DROP TABLE IF EXISTS studentmatch;
DROP TABLE IF EXISTS mark;

DROP TABLE IF EXISTS quiz;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS tutor;
DROP TABLE IF EXISTS course;

-- PRIMITIVE
CREATE TABLE student (
  id        int(32) NOT NULL,
  email     varchar(256) NOT NULL,
  password  varchar(256) NOT NULL,
  salt      varchar(256) NOT NULL,
  CONSTRAINT uaStudentID UNIQUE(id),
  CONSTRAINT uaStudentEmail UNIQUE(email)

);

CREATE TABLE tutor (
  id        int(32) NOT NULL,
  email     varchar(256) NOT NULL,
  password  varchar(256) NOT NULL,
  salt      varchar(256) NOT NULL,
  CONSTRAINT uaTutorId UNIQUE(id),
  CONSTRAINT uaTutorEmail UNIQUE(email)
);

CREATE TABLE course (
  id        int(32) NOT NULL,
  code      varchar(8) NOT NULL,
  name      varchar(256) NOT NULL,
  CONSTRAINT uaCourseId UNIQUE(id),
  CONSTRAINT uaCourseCode UNIQUE(code)
);

-- MATCHING

CREATE TABLE studentmatch (
  studentId int(32),
  courseId  int(32),
  CONSTRAINT uaStudentMatch UNIQUE(studentId, courseId),
  FOREIGN KEY (studentId) REFERENCES student(id),
  FOREIGN KEY (courseId) REFERENCES course(id)
);

CREATE TABLE tutormatch (
  tutorId   int(32),
  courseId  int(32),
  CONSTRAINT uaTutorMatch UNIQUE(tutorId, courseId),
  FOREIGN KEY (tutorId) REFERENCES tutor(id),
  FOREIGN KEY (courseId) REFERENCES course(id)
);

CREATE TABLE matching (
  studentId int(32),
  tutorId   int(32),
  courseId  int(32),
  CONSTRAINT uaMatching UNIQUE(studentId, tutorId, courseId),
  FOREIGN KEY (studentId) REFERENCES student(id),
  FOREIGN KEY (tutorId) REFERENCES tutor(id),
  FOREIGN KEY (courseId) REFERENCES course(id)
);

-- QUIZ

CREATE TABLE quiz (
  id        int(32) NOT NULL,
  courseId  int(32),
  content   varchar(1024),
  CONSTRAINT uaQuiz UNIQUE(id),
  FOREIGN KEY (courseId) REFERENCES course(id)
);

CREATE TABLE mark (
  quizId    int(32),
  studentId int(32),
  mark      int(32),
  CONSTRAINT uaMark UNIQUE(quizId, studentId),
  FOREIGN KEY (quizId) REFERENCES quiz(id),
  FOREIGN KEY (studentId) REFERENCES student(id)
);