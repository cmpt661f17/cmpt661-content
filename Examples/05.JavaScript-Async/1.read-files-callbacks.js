let fs = require('fs');

function fetchStudent (studentId, callback) {
    fs.readFile('data/student.json', (err, data) => {
        if (err) {
            callback(err);
        }
        else {
            let students = JSON.parse(data);
            let student = students.find(s => s.studentId === studentId);
            if (student != "undefined") {
                callback(null, student);
            }
            else {
                callback(new Error("No records found"));
            }
        }
    });
}

function fetchCourses (courseIds, callback) {
    fs.readFile('data/course.json', (err, data) => {
        if (err) {
            callback(err);
        } else {
            let courses = JSON.parse(data);
            courses = courses.filter(c => courseIds.indexOf(c.crn) >= 0);
            //console.log(courses);
            callback(null, courses);
        }
    });
}

function getStudent(studentId, callback) {
    let student;
    fetchStudent(studentId, (err, aStudent) => {
        student = aStudent;
        fetchCourses(student.courseIds, function (err, courses) {
            student.courses = courses;
            callback(null, student);
        });
    });
}

let studentId = 2015001;
function display(err, student) {
    if (err != null) {
        console.log(err);
    } else {
        //Displays a pretty-printed multiline JSON representation indented with 2 spaces
        console.log(JSON.stringify(student, null, 2));
    }
}

fetchStudent(studentId, display);

getStudent(studentId, (err, student) => {
    console.log("\nStudent with course details: ");
    console.log(JSON.stringify(student, null, 2));
});