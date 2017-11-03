const fs = require('fs-extra');
class StudentRepository {

    async getStudents() {
        const data = await fs.readFile('data/student.json')
        let students = JSON.parse(data)
        return students
    }

    async getStudent(studentId) {
        let students = await this.getStudents()
        let student = students.find(s => s.studentId === studentId)
        if (student != "undefined") {
            return student
        }
        else {
            throw new Error("No records found")
        }
    }

    async getCourses(courseIds) {
        const data = await fs.readFile('data/course.json')
        let courses = JSON.parse(data)
        courses = courses.filter(c => courseIds.indexOf(c.crn) >= 0)
        //console.log(courses)
        return courses
    }

    async getCourseInstructor(course) {
        const data = await fs.readFile('data/staff.json')
        let instructors = JSON.parse(data)
        course.instructor = instructors.find( ins => ins.staffNo === course.instructorId )
        delete course.instructor.password  //No need to return the password attribute
        return course
    }

    async getStudentCourses(studentId) {
        let student = await this.getStudent(studentId)
        let courses = await this.getCourses(student.courseIds)
        //Get instructor details for each course
        student.courses = await Promise.all( courses.map(course => this.getCourseInstructor(course)) )
        return student
    }
}

module.exports = new StudentRepository()