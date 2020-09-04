let db_credential = require('../Config/db-config');
const mysql = require('mysql')
const Promise = require('bluebird')

Promise.promisifyAll(require('mysql/lib/Connection').prototype);
Promise.promisifyAll(require('mysql/lib/Pool').prototype);



let addFaculty = async (faculty) => {

    try {
        console.log('Inside addFaculty function ')

        let arrayData = [faculty.first, faculty.last, faculty.employeeId, faculty.email, faculty.password];
        console.log(arrayData);

        const connection = mysql.createConnection(db_credential);

        await connection.connectAsync();
        console.log('Connection Successfully');
        let sql = "INSERT INTO faculty (first,last,employee_id,email,password) VALUES (?,?,?,?,?)";
        let result = await connection.queryAsync(sql, arrayData);// second parameter as array for dynamic values 
        // ? will replace the corresponding array index values 
        console.log("addFaculty ADDED RESULT:", result);
        await connection.endAsync();
        return result;// returning a promise

    } catch (error) {

        console.log('ERROR addStudent()', error)


    }
}

let readAllFaculty = async () => {

    try {
        console.log('Inside function readAllFaculty')

        const connection = mysql.createConnection(db_credential);

        await connection.connectAsync();
        console.log('Connection Successfully');
        let sql = "SELECT * FROM faculty";
        let result = await connection.queryAsync(sql);
        await connection.endAsync();
        console.log("GETTING DATA:", result)
        return result;// returning a promise

    } catch (error) {
        console.log('ERROR:readAllFaculty()', error)


    }
}
let getFacultyByEmployeeID = async (employeeId) => {

    try {
        console.log('Inside function getFacultyByEmployeeID')

        const connection = mysql.createConnection(db_credential);

        await connection.connectAsync();
        console.log('Connection Successfully');
        let sql = "SELECT * FROM faculty where employee_id = ?";
        let result = await connection.queryAsync(sql, [employeeId]);
        await connection.endAsync();
        console.log(result);
        return result;// returning a promise

    } catch (error) {
        console.log('ERROR:getFacultyByEmployeeID():', error)


    }
}
let getFacultyByEmail = async (email) => {

    try {
        console.log('Inside function getFacultyByEmail')

        const connection = mysql.createConnection(db_credential);

        await connection.connectAsync();
        console.log('Connection Successfully');
        let sql = "SELECT email FROM faculty where email = ?";
        let result = await connection.queryAsync(sql, [email]);
        await connection.endAsync();
        console.log(result);
        return result;// returning a promise

    } catch (error) {
        console.log('ERROR:getFacultyByEmail():', error)


    }
}
let removeEmployeeByEmployeeId = async (employeeId) => {

    try {
        console.log('Inside function removeEmployeeByEmployeeId')

        const connection = mysql.createConnection(db_credential);

        await connection.connectAsync();
        console.log('Connection Successfully');
        let sql = "DELETE FROM faculty where employee_id = ?";
        let result = await connection.queryAsync(sql, [employeeId]);
        await connection.endAsync();
        console.log(result);
        return result;// returning a promise

    } catch (error) {
        console.log('ERROR:removeEmployeeByEmployeeId():', error)


    }
}
let updateFacultyByEmployeeId = async (employee, employeeId) => {

    try {
        console.log('Inside function updateFacultyByEmployeeId')

        const connection = mysql.createConnection(db_credential);

        await connection.connectAsync();
        console.log('Connection Successfully');

        let sql = `UPDATE faculty SET first=?,last=?,email=?,password=? WHERE employee_id=?`;
        let result = await connection.queryAsync(sql, [employee.first, employee.last, employee.email, employee.password, employeeId]);
        await connection.endAsync();

        console.log(result);
        return result;// returning a promise

    } catch (error) {
        console.log('ERROR:updateFacultyByEmployeeId():', error)


    }
}
let AuthenticateFaculty = async(employee) => {


    try {


        console.log('Inside function AuthenticateFaculty')

        const connection = mysql.createConnection(db_credential);

        await connection.connectAsync();
        console.log('Connection Successfully');

        let sql = `select * from faculty where employee_id = ? and password = ?`;
        let result = await connection.queryAsync(sql, [ employee.employeeId,employee.password]);
        await connection.endAsync();

        console.log(result);
        return result;// returning a promise

    } catch (error) {
        console.log('ERROR:AuthenticateFaculty():', error)

    }

}

module.exports = {
    AuthenticateFaculty,
    updateFacultyByEmployeeId,
    removeEmployeeByEmployeeId,
    getFacultyByEmail,
    getFacultyByEmployeeID,
    readAllFaculty,
    addFaculty
};
