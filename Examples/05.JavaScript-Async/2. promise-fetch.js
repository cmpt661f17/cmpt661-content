let fetch = require("node-fetch");

function getStudents() {
    let url = "https://cmps356s17.github.io/data/student.json";
    return fetch(url).then(response => response.json());
}

function displayStudents(students) {
    console.log("Students List: ")
    for(let student of students) {
        console.log(`${student.studentId} - ${student.firstname} ${student.lastname}`);
    }
}

getStudents().then(students => displayStudents(students))
             .catch(err => console.log(err));