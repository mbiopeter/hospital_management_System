import { registerUser } from "../models/addUser.model.js";

export const RegisterUserService = async  (UserName, FirstName, LastName, TokenNumber, MobileNumber, Email, Password,RegDate) => {
    try{
        const results = await registerUser(UserName, FirstName, LastName, TokenNumber, MobileNumber, Email, Password,RegDate);
        if(results){
            return {addUser: true}
        }
        else{
            return {addUser: false}
        }
    }
    catch (err) {
        throw err;
    }
}