import { VaridateUserCredentials } from "../services/login.services.js";

export const ControlUserCredentials = async (req, res) => {
    try{
        const {Username, Password, Token} = req.body;
        const LoginTime = new Date();
        const results = await VaridateUserCredentials(req,Username, Password, Token, LoginTime);
        return res.json(results);
    }
    catch (err) {
        throw err;
    }
}