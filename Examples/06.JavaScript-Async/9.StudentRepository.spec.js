let studentRepository = require('./9.StudentRepository.async-await')
let studentId = 2015002;

studentRepository.getStudentCourses(studentId)
    .then( student =>  console.log( JSON.stringify(student, null, 2) ) )
    .catch( err => console.log(err) );

//JSON.stringify(student, null, 2) is used to display a pretty-printed multiline JSON representation indented with 2 spaces