let studentRepository = require('./StudentRepository.js')

studentRepository.getStudents().then(students => {
    console.log(students)
}).catch( err => console.log(err) )

let studentId = 2015002
studentRepository.getStudentCourses(studentId).then(student => {
    //Displays a pretty-printed multiline JSON representation indented with 2 spaces
    console.log(JSON.stringify(student, null, 2))
}).catch( err => console.log(err) )

