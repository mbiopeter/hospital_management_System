import { RegisterUserService } from "../services/addUser.services.js";
import bcrypt from 'bcrypt';
import {body} from 'express-validator';

const saltRounds = 10;
export const ControlUserRegistration = async (req,res) => {
    try{
        const {UserName, FirstName, LastName, TokenNumber, MobileNumber, Email, Password} = req.body;
        const RegDate = new Date();
        bcrypt.hash(Password, saltRounds, async (err, hashedPassword) => {
            if(err){
                return res.json("error in hashing the password");
            }
            else{
                if(body('UserName').isAlphanumeric().isLength({ min: 3, max: 30 }).trim() && body('FirstName').isAlphanumeric().isLength({ min: 3, max: 30 }).trim() && body('LastName').isAlphanumeric().isLength({ min: 3, max: 30 }).trim() && body('Email').isEmail().normalizeEmail() && body('MobileNumber').isNumeric() && body('TokenNumber').isNumeric()){
                    const results = await RegisterUserService(UserName, FirstName, LastName, TokenNumber, MobileNumber, Email, hashedPassword, RegDate);
                    return res.json(results);
                }
            }
        });
    }
    catch (err) {
        throw err;
    }
}