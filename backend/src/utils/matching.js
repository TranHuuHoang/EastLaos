const Source = class {
  constructor(students = [new Student(),]) {
    this.students = students;
  }
};

const Student = class {
  constructor(studentMatches = [new StudentMatch(),]) {
    this.studentMatches = studentMatches;
  }
};

const StudentMatch = class {
  constructor(tutorMatches = [new TutorMatch(),]) {
    this.tutorMatches = tutorMatches;
  }
};

const TutorMatch = class {
  constructor(tutors = [new Tutor(),])
};