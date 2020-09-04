const express = require('express');
const router = express.Router();
const student = require('../middleware/student.js')
const Joi = require('joi');



router.get('/allStudent', async(req, res) => {

    try {
        let result = await student.readAllStudents()
        console.log("GOT DATA:", result);
        res.status(200).send(result);

    } catch (error) {
        res.status(500).send(error);

    }
});
router.get('/:id', async (req, res) => {

    try {
        let result = await student.getStudentByEnrollment(req.params.id);
        if (result.length) {
            return res.status(200).send(result);

        } else {
            return res.status(500).send(`Student with Enrollment with ${req.params.id} not found`);

        }
    } catch (error) {
        return res.status(500).send(eror);

    }



});
router.post('/', async (req, res) => {

    /* const { error } = validateStudent(req.body);
 
     if (error)
         return res.status(400).send(error.details[0].message);
 */
    try {


        let result = await student.getStudentByEnrollment(req.body.enrollment);
        let temp = await student.getStudentByEmail(req.body.email);
        console.log("TEMP:",temp);
        console.log(result.length);
        var response = [];

        if(temp.length && result.length){
            console.log("ENROLLMENT AND EMAIL ALREADY EXIST:",result);
            response.push(result[0]);
            response.push(temp[0]);

            return res.send(response);
        }
        else if (result.length) {
            console.log("ENROLLMENT ALREADY EXIST:",result);
            //return res.status(409).send(`Student with enrollment "${req.body.enrollment}" already exist`);
            return res.send(result);

        }
       else if (temp.length) {
            console.log("Email ALREADY EXIST:",temp);
            //return res.status(409).send(`Student with enrollment "${req.body.enrollment}" already exist`);
            return res.send(temp);

        }
     
        else {
            let status = await student.addStudent(req.body);
            console.log("STATUS:",status)
            return res.status(200).send([status]);

        }


    } catch (error) {

        console.log('inside post catch')
        return res.send(error);

    }


});
router.put('/:id', async (req, res) => {
    /*
        const { error } = validateStudent(req.body);
        if (error) return res.status(400).send(error.details[0].message);
    */
    try {
        console.log('inside put',req.body)
        
        let status = await student.getStudentByEnrollment(req.params.id);
        if (status.length) {
            let result = await student.updateStudentByEnrollment(req.body, req.params.id);
            res.status(200).send(`Student details updated successfully`);
        } else {
            res.status(200).send(`Student with enrollment "${req.params.id}" does not exist`);
        }


    } catch (error) {

        res.status(500).send(error);
    }


});

router.delete('/:id', async (req, res) => {

    try {

        let result = await student.removeStudentByEnrollment(req.params.id);
        console.log(result);
        if (!result.affectedRows) {
            res.status(409).send(`Student with enrollment "${req.params.id}" does not exist`);
        }
        return res.send(`Student removed successfully`);
    } catch (error) {

    }


});


function validateStudent(student) {

    const scheme = {

    };

    return Joi.validate(student, scheme);

}


module.exports = router;