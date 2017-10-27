const studentRepository = require('./9.StudentRepository.async-await');
const expect = require('chai').expect;
//see more assertion examples @ http://chaijs.com/api/bdd/

describe('StudentRepository Test Suite', () => {
    it('student# 2015001 to have property firstname with value Fn1', async () => {
        const studentId = 2015001;
        const student = await studentRepository.getStudentCourses(studentId);
        //JSON.stringify(student, null, 2) is used to display a pretty-printed multiline JSON representation indented with 2 spaces
        //console.log( JSON.stringify(student, null, 2) );
        expect( student ).to.be.ok;
        expect( student ).to.have.property('firstname').and.equal('Fn1');
    });

    it('student# 2015001 to have 3 courses', async () => {
        const studentId = 2015001;
        const student = await studentRepository.getStudentCourses(studentId);
        expect( student ).to.have.property('courseIds').to.be.an('array');
        expect( student ).to.have.property('courseIds').to.have.lengthOf(3);
    });
});

