const Source = class {
  constructor(next = [new Student(),]) {
    this.data = {};
    this.next = next;
    this.capacities = new Array(next.length)
    this.residualPos = new Array(next.length)
    this.residualNeg = new Array(next.length)
    for (let i=0; i<next.length; i++) {
      this.capacities[i] = 1;
      this.residualPos[0] = 1;
      this.residualNeg[0] = 0;
    }
  }
};

const Student = class {
  constructor(studentId = 0, next = [new StudentMatch(),]) {
    this.data = {studentId: studentId};
    this.next = next;
    this.capacities = new Array(next.length)
    this.residualPos = new Array(next.length)
    this.residualNeg = new Array(next.length)
    for (let i=0; i<next.length; i++) {
      this.capacities[i] = 1;
      this.residualPos[0] = 1;
      this.residualNeg[0] = 0;
    }
  }
};

const StudentMatch = class {
  constructor(studentId = 0, courseId = 0, next = [new TutorMatch(),]) {
    this.data = {studentId: studentId, courseId: courseId};
    this.next = next;
    this.capacities = new Array(next.length)
    this.residualPos = new Array(next.length)
    this.residualNeg = new Array(next.length)
    for (let i=0; i<next.length; i++) {
      this.capacities[i] = 1;
      this.residualPos[0] = 1;
      this.residualNeg[0] = 0;
    }
  }
};

const TutorMatch = class {
  constructor(tutorId = 0, courseId = 0, next = [new Tutor(),]) {
    this.data = {tutorId: tutorId, courseId: courseId};
    this.next = next;
    this.capacities = new Array(next.length)
    this.residualPos = new Array(next.length)
    this.residualNeg = new Array(next.length)
    for (let i=0; i<next.length; i++) {
      this.capacities[i] = 1;
      this.residualPos[0] = 1;
      this.residualNeg[0] = 0;
    }
  }
};

const Tutor = class {
  constructor(tutorId = 0, next = [new Sink(),]) {
    this.data = {tutorId: tutorId};
    this.next = next;
    this.capacities = new Array(next.length)
    this.residualPos = new Array(next.length)
    this.residualNeg = new Array(next.length)
    for (let i=0; i<next.length; i++) {
      this.capacities[i] = 1;
      this.residualPos[0] = 1;
      this.residualNeg[0] = 0;
    }
  }
};

const Sink = class {
  constructor() {
    this.data = {};
    this.next = [];
  }
};

module.exports = {Source, Student, StudentMatch, TutorMatch, Tutor, Sink};