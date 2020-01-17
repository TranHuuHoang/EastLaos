// Get course data
var courseData = JSON.parse(sessionStorage.getItem("courseData"))
// console.log(JSON.parse(courseData));

// $("#courseName").html(courseData["name"]);
// $("#courseCode").html(courseData["code"]);
// $("#courseInfo").html(courseData["information"]);

$(document).ready(function() {
  $("#courseName").html(courseData["name"]);
  $("#courseCode").html(courseData["code"]);
  $("#courseInfo").html(courseData["information"]);
});
