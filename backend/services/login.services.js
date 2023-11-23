import { getUserCredentials } from "../models/login.model.js";
import session from 'express-session';
import crypto from 'crypto';

const secretKey = crypto.randomBytes(16).toString('hex');

export const sessionMiddleware = session({
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure:false,
    maxAge: 1000 * 60 * 60 *24 
  }
});
export const VaridateUserCredentials = async (req, Username, Password, Token, LoginTime) => {
    try{
        const results = await getUserCredentials(Username, Password, Token, LoginTime);
        if(results  && results.length > 0){
            req.session.Username = Username;
            console.log(req.session.Username);
            return {Login : true, Username: Username}
        }
        else{
            return {Login : false}
        }
    }
    catch (err){
        throw err;
    }
}
export const UserSession = (req,res) => {
    if(req.session.Username){
        return res.json({valid: true, Username: req.session.Username})
    }
    else{
        return res.json({valid: false})
    }
}