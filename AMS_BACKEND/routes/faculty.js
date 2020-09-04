const express = require('express');
const router = express.Router();
const faculty = require('../middleware/faculty.js')
const Joi = require('joi');



router.get('/allFaculties', async (req, res) => {

    try {
        let result = await faculty.readAllFaculty()
        console.log("GOT DATA:", result);
        res.status(200).send(result);

    } catch (error) {
        res.status(500).send(error);

    }
});

router.get('/:id', async (req, res) => {

    try {
        let result = await faculty.getFacultyByEmployeeID(req.params.id)
        console.log("GOT DATA:", result);
        res.status(200).send(result);

    } catch (error) {
        res.status(500).send(error);

    }
});

router.post('/', async (req, res) => {

    /* const { error } = validateFaculty(req.body);
 
     if (error)
         return res.status(400).send(error.details[0].message);
 */
    try {


        let result = await faculty.getFacultyByEmployeeID(req.body.employeeId);
        let temp = await faculty.getFacultyByEmail(req.body.email);
        console.log("TEMP:", temp);
        console.log(result.length);
        var response = [];

        if (temp.length && result.length) {
            console.log("EmplyoeeId AND EMAIL ALREADY EXIST:", result);
            response.push(result[0]);
            response.push(temp[0]);
            return res.status(409).send(`Faculty with emplyoeeId "${req.body.employeeId}" and with email "${req.body.email}" already exist` );

           // return res.send(response);
        }
        else if (result.length) {
            console.log("EmplyoeeId ALREADY EXIST:", result);
            return res.status(409).send(`Faculty with employeeId "${req.body.employeeId}" already exist`);
            //return res.send(result);

        }
        else if (temp.length) {
            console.log("Email ALREADY EXIST:", temp);
            return res.status(409).send(`Faculty with email "${req.body.email}" already exist`);
            //return res.send(temp);

        }

        else {
            let status = await faculty.addFaculty(req.body);
            console.log("STATUS:", status)
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
        console.log('inside put', req.body)

        let status = await faculty.getFacultyByEmployeeID(req.params.id);
        if (status.length) {
            let result = await faculty.updateFacultyByEmployeeId(req.body, req.params.id);
            res.status(200).send(`Faculty details updated successfully`);
        } else {
            res.status(200).send(`Faculty with employeeId "${req.params.id}" does not exist`);
        }


    } catch (error) {

        res.status(500).send(error);
    }


});

router.delete('/:id', async (req, res) => {

    try {

        let result = await faculty.removeEmployeeByEmployeeId(req.params.id);
        console.log(result);
        if (!result.affectedRows) {
            res.status(409).send(`Faculty with enrollment "${req.params.id}" does not exist`);
        }
        return res.send(`Faculty removed successfully`);
    } catch (error) {

    }


});

router.post('/authenticate', async (req, res) => {

    try {

        console.log(req.body);
        let result = await faculty.AuthenticateFaculty(req.body);
        console.log("Auth RESULT:",result);
       /* if (!result.length) {
           //return res.send(`faculty with employeeId "${req.body.employeeId}" and password ${req.body.password} does not exist`);
            return res.send(result);
        }*/
        return res.send(result);
    } catch (error) {
        console.log(error);
    }


});



function validateStudent(student) {

    const scheme = {

    };

    return Joi.validate(student, scheme);

}


module.exports = router;