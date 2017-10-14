const studentTemplate =`
    <h4>Selected Student:</h4>
    <table class="table table-striped">
        <tbody>
        <tr>
            <td>StudentId</td>
            <td>{{studentId}}</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>{{firstname}} {{lastname}}</td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>{{gender}}</td>
        </tr>
        <tr>
            <td>Program</td>
            <td>{{program}}</td>
        </tr>
        <tr>
            <td>GPA</td>
            <td>{{gpa}}</td>
        </tr>
        <tr>
            <td>Course Ids</td>
            <td>{{courseIds}}</td>
        </tr>

        <tr>
            <td>Courses</td>
            <td>
                <ul>
                    {{#each courses}}
                        <li>{{courseCode}} - {{courseName}} by {{instructor.firstname}} {{instructor.lastname}}</li>
                    {{/each}}
                </ul>
            </td>
        </tr>
        </tbody>
    </table>
`

//When the document is loaded in the browser then listen to studentsDD on change event
document.addEventListener("DOMContentLoaded", () => {
    console.log("js-DOM fully loaded and parsed");
    document.querySelector('#studentsDD').addEventListener("change", onStudentChange)
})

async function getStudent(studentId) {
    const url = `/api/students/${studentId}`
    const response = await fetch(url)
    return await response.json()
}

async function onStudentChange(e) {
    //this refers to the html element that raised the event (i.e., studentsDD element)
    const selectedStudentId = this.value

    if (selectedStudentId == "") {
        //Empty the student details div
        document.querySelector('#studentDetails').innerHTML = ''
        return
    }

    console.log("onStudentChange.selectedStudentId:", selectedStudentId)

    try {
        const student = await getStudent(selectedStudentId)
        const htmlTemplate = Handlebars.compile(studentTemplate)
        const htmlContent = htmlTemplate(student)

        document.querySelector('#studentDetails').innerHTML = htmlContent
    }
    catch (err) {
        console.log(err)
    }
}