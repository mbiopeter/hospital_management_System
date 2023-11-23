import { VaridateUserCredentials } from "../services/login.services.js";
import { UserSession } from "../services/login.services.js";

export const ControlUserCredentials = async (req, res) => {
    try{
        const username = req.body.username[0];
        const password = req.body.password[0];
        const token = req.body.token[0];
        const LoginTime = new Date();
        const results = await VaridateUserCredentials(req,username, password, token, LoginTime);
        return res.json(results);
    }
    catch (err) {
        throw err;
    }
}

export const SessionController = async (req, res) => {
    try{
        const results = await UserSession(req,res);
        return results;
    }
    catch (err){
        throw err;
    }
}