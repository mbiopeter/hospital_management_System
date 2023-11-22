import {db} from '../db.js';
import bcrypt from 'bcrypt'

export const getUserCredentials = async (Username, Password, Token, LoginTime) => {
  const LoginQuery = `
    SELECT *
    FROM users 
    WHERE Username = ? AND 
    TokenNumber = ?
  `;
  const UpdateTimeQuery = `
    UPDATE users SET
    Login = ? 
    WHERE Username = ? AND 
    TokenNumber = ? AND 
    Password = ?
  `;
  try {
    const [result] = await db.query(LoginQuery, [Username, Token])
    if(result.length > 0){
      if(await bcrypt.compare(Password, result[0].Password )){
        const [Login] = await db.query(UpdateTimeQuery, [LoginTime, Username, Token, result[0].Password]);
        if(Login){
          return result;
        }
      } 
    }
  } 
  catch (err) {
    throw err;
  }
};
