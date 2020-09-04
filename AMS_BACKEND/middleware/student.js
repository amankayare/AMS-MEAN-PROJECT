let db_credential = require('../Config/db-config');
const mysql = require('mysql')
const Promise = require('bluebird')

Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);



let addStudent = async (student) => {

    try {
        console.log('Inside addstudent function ')

        let arrayData = [student.first, student.last, student.enrollment, student.email, student.password];
        console.log(arrayData);

        const connection = mysql.createConnection(db_credential);

        await connection.connectAsync();
        console.log('Connection Successfully');
        let sql = "INSERT INTO students (first,last,enrollment,email,password) VALUES (?,?,?,?,?)";
        let result = await connection.queryAsync(sql, arrayData);// second parameter as array for dynamic values 
        // ? will replace the corresponding array index values 
        console.log("STUDENT ADDED RESULT:", result);
        await connection.endAsync();
        return result;// returning a promise

    } catch (error) {

        console.log('ERROR addStudent()', error)


    }
}

let readAllStudents = async () => {

    try {
        console.log('Inside function readAllUsers')

        const connection = mysql.createConnection(db_credential);

        await connection.connectAsync();
        console.log('Connection Successfully');
        let sql = "SELECT * FROM students";
        let result = await connection.queryAsync(sql);
        await connection.endAsync();
        console.log("GETTING DATA:", result)
        return result;// returning a promise

    } catch (error) {
        console.log('ERROR:readAllStudents()', error)


    }
}
let getStudentByEnrollment = async (enrollment) => {

    try {
        console.log('Inside function getStudentByEnrollment')

        const connection = mysql.createConnection(db_credential);

        await connection.connectAsync();
        console.log('Connection Successfully');
        let sql = "SELECT enrollment FROM students where enrollment = ?";
        let result = await connection.queryAsync(sql, [enrollment]);
        await connection.endAsync();
        console.log(result);
        return result;// returning a promise

    } catch (error) {
        console.log('ERROR:getStudentByEnrollment():', error)


    }
}
let getStudentByEmail = async (email) => {

    try {
        console.log('Inside function getStudentByEmail')

        const connection = mysql.createConnection(db_credential);

        await connection.connectAsync();
        console.log('Connection Successfully');
        let sql = "SELECT email FROM students where email = ?";
        let result = await connection.queryAsync(sql, [email]);
        await connection.endAsync();
        console.log(result);
        return result;// returning a promise

    } catch (error) {
        console.log('ERROR:getStudentByEmail():', error)


    }
}
let removeStudentByEnrollment = async (enrollment) => {

    try {
        console.log('Inside function removeStudentByEnrollment')

        const connection = mysql.createConnection(db_credential);

        await connection.connectAsync();
        console.log('Connection Successfully');
        let sql = "DELETE FROM students where enrollment = ?";
        let result = await connection.queryAsync(sql, [enrollment]);
        await connection.endAsync();
        console.log(result);
        return result;// returning a promise

    } catch (error) {
        console.log('ERROR:removeStudentByEnrollment():', error)


    }
}
let updateStudentByEnrollment = async (student, enrollment) => {

    try {
        console.log('Inside function updateStudentByEnrollment')

        const connection = mysql.createConnection(db_credential);

        await connection.connectAsync();
        console.log('Connection Successfully');

        let sql = `UPDATE students SET first=?,last=?,email=?,password=? WHERE enrollment=?`;
        let result = await connection.queryAsync(sql, [student.first, student.last, student.email, student.password, enrollment]);
        await connection.endAsync();

        console.log(result);
        return result;// returning a promise

    } catch (error) {
        console.log('ERROR:updateStudentByEnrollment():', error)


    }
}



module.exports = {
    addStudent,
    getStudentByEnrollment,
    readAllStudents,
    removeStudentByEnrollment,
    updateStudentByEnrollment,
    getStudentByEmail
};
