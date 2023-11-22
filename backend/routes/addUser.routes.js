import { ControlUserRegistration } from "../controllers/addUser.controller.js";
import express from 'express';

export const router = express.Router();

//http://localhost:${port}/addUser/
router.post('/', ControlUserRegistration, (req,res) => {
    try{
        res.json({message: 'User was successfully added'});
    }
    catch (err){
        throw err;
    }
});