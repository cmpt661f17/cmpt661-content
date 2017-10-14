class StudentController {
    constructor() {
        this.studentRepository = require('./../models/StudentRepository')
    }

    async getStudents(req, res) {
        let students = await this.studentRepository.getStudents()
        res.json(students)
    }

    async getStudent(req, res) {
        try {
            let studentId = req.params.id
            console.log('getStudent.req.params.id', studentId)

            let student = await this.studentRepository.getStudentCourses(parseInt(studentId))
            //console.log(JSON.stringify(student, null, 2))
            res.json(student)
        }
        catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }

    async index (req, res) {
        let students = await this.studentRepository.getStudents()
        res.render('student', { students, profs })
    }
}

module.exports = new StudentController()