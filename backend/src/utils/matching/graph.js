const Source = class {
  constructor(next = [new Student(),]) {
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
  constructor(next = [new StudentMatch(),]) {
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
  constructor(next = [new TutorMatch(),]) {
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
  constructor(next = [new Tutor(),]) {
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
  constructor(next = [new Sink(),]) {
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
  constructor() {}
};

module.exports = {Source, Student, StudentMatch, TutorMatch, Tutor, Sink};