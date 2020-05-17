const express = require('express');
const {check, validationResult} = require('express-validator');
const jwt = require("jsonwebtoken");
const config = require('config');

const router = express.Router();
const adminAuth = require('../../middleware/adminAuth');
const Student = require('../../models/Student');


//check authentication by token in header
router.get('/', adminAuth ,async (req, res) => {
    try{
        res.json("authentication successfull");
    }
    catch(error){
        res.status(500).send('server error');
    }
});

//logging in
router.post('/school', [
    check('username','please enter a valid email').exists(),
    check('password','password is required').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json( {errors : errors.array()} );
    }
    const {username, password} = req.body;

    try{
        
        if(username != config.get('username') || password != config.get('password')){
            return res.status(400).json({ errors : [{msg : 'invalid credentials'}] });
        }

        const payload = {
            user : {
                username : config.get('username')
            }
        }
    
        jwt.sign(payload, config.get('jwtSecret'), {expiresIn : 360000}, (err, token) => {
            if(err) throw err
            res.json({token});
        });

        
    }
    
    catch{
        res.status(500).json({ errors : errors.message});
    }
 
});


router.post('/student', [
    check('loginId','please enter login id').exists(),
    check('password','password is required').exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json( {errors : errors.array()} );
    }
    const {loginId, password} = req.body;

    try{
        
        let student = await Student.findOne({loginId});

        if(!student){
            return res.status(400).json({ errors : [{msg : 'invalid credentials'}] });
        }
        
        if(student.password != password){
            return res.status(400).json({ errors : [{msg : 'invalid credentials'}] });
        }


        const payload = {
            student : {
                id : student.id
            }
        }
    
        jwt.sign(payload, config.get('jwtSecret'), {expiresIn : 360000}, (err, token) => {
            if(err) throw err
            res.json({token});
        });

        
    }
    
    catch (errors){
        res.status(500).json({ errors : errors.message});
    }
 
});

module.exports = router;