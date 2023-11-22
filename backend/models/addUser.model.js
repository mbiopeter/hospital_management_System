import {db} from '../db.js';

export const registerUser = async (UserName, FirstName, LastName, TokenNumber, MobileNumber, Email, Password,RegDate) => {
    const InsertQuery =`
    INSERT INTO users(UserName, FirstName, LastName, TokenNumber, MobileNumber, Email, Password,RegDate)
    VALUES(?,?,?,?,?,?,?,?)
    `;
    const SelectQuery =`
    SELECT * 
    FROM users WHERE
    Email = ? OR 
    MobileNumber = ? OR
    TokenNumber = ?
    `;
    try {
        const [CheckUserExistence] =  await db.query(SelectQuery,[Email,MobileNumber,TokenNumber])
        if(CheckUserExistence.length <= 0){
            const [result] = await db.query(InsertQuery,[UserName, FirstName, LastName, TokenNumber, MobileNumber, Email, Password,RegDate ]);
            return result
        }
    }
    catch (err) {
        throw err;
    }
}