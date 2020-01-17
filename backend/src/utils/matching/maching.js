const {Source, Student, StudentMatch, TutorMatch, Tutor, Sink} = require("./graph.js")

const map2array = function(mapIn = new Map()) {
  const itKey = mapIn.keys();
  const itValue = mapIn.values();
  return {
    key: Array.from(itKey),
    value: Array.from(itValue),
  };
};


const createMatchingGraph = function(studentMatches = [{studentId: 0, courseId: 0},], tutorMatches = [{tutorId: 0, courseId: 0},]) {
  // Sink
  const sink = new Sink();
  // Tutor
  const tutorMap = new Map(); // tutorId -> tutor
  tutorMatches.forEach(function(item) {
    const {tutorId} = item;
    if (!tutorMap.has(tutorId)) {
      tutorMap.set(tutorId, new Tutor([sink]))
    }
  });
  // TutorMatch
  const tutorMatchMap = new Map(); // courseId -> [tutorMatch]
  tutorMatches.forEach(function(item) {
    const {tutorId, courseId} = item;
    if (!tutorMatchMap.has(courseId)) {
      tutorMatchMap.set(courseId, []);
    }
    tutorMatchMap.get(courseId).push(new TutorMatch([tutorMap.get(tutorId)]));
  });
  // StudentMatch
  const studentMatchMap = new Map(); // studentId -> [studentMatch]
  studentMatches.forEach(function(item) {
    const {studentId, courseId} = item;
    if (!studentMatchMap.has(studentId)) {
      studentMatchMap.set(studentId, []);
    }
    studentMatchMap.get(studentId).push(new StudentMatch(tutorMatchMap.get(courseId)));
  });
  // Student
  const studentMap = new Map(); // studentId -> Student
  studentMatches.forEach(function(item) {
    const {studentId} = item;
    if (!studentMap.has(studentId)) {
      studentMap.set(studentId, new Student(studentMatchMap.get(studentId)));
    }
  });
  // Source
  const source = new Source(map2array(studentMap).value);
  return {source, studentMap, studentMatchMap, tutorMatchMap, tutorMap, sink};
}

const graph = createMatchingGraph(
  [
    {studentId: 1, courseId: 1},
    {studentId: 1, courseId: 2},
    {studentId: 2, courseId: 1}
  ],
  [
    {tutorId: 1, courseId: 1},
    {tutorId: 2, courseId: 1},
    {tutorId: 2, courseId: 2}
  ],
);

console.log();
