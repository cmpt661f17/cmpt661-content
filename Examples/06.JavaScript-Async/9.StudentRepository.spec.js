const studentRepository = require('./9.StudentRepository.async-await');
//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('StudentRepository Test Suite', () => {
    it('student# 2015001 to have property firstname with value Fn1', async () => {
        const studentId = 2015001;
        const student = await studentRepository.getStudentCourses(studentId);
        //JSON.stringify(student, null, 2) is used to display a pretty-printed multiline JSON representation indented with 2 spaces
        console.log( JSON.stringify(student, null, 2) );
        expect( student ).to.be.ok;
        expect( student ).to.have.property('firstname').and.equal('Fn1');
    });

    it('student# 2015001 to have 3 courses', async () => {
        const studentId = 2015001;
        const student = await studentRepository.getStudentCourses(studentId);
        expect( student ).to.have.property('courseIds').to.be.an('array');
        expect( student ).to.have.property('courseIds').to.have.lengthOf(3);
    });

    it('Asia should should have 50 countries', async () => {
        let region = 'Asia';
        let uri = `region/${region}`;

        const response = await chai.request('https://restcountries.eu/rest/v1/').get(uri);
        expect(response).to.have.status(200);
        expect(response).to.have.property('body').and.be.a('array');
        expect(response.body).to.have.property('length', 50);
    })
});

