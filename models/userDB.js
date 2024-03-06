import {pool} from "../config/config.js";

const getUsers= async()=>{
    const [result]=await pool.query(`
   SELECT * FROM users `)
   return result
}

const getSingleUser=async(id)=>{
    const[user]=await pool.query(`
    SELECT * FROM users
    WHERE userID= ?`,[id])
return user
}

const addUser = async(userName,userSurname,userRole,email,password)=>{
    await pool.query(`
   INSERT INTO users (userName,userSurname,userRole,email,password)
    VALUES(?,?,?,?,?)`,[userName,userSurname,userRole,email,password])
}

const editUser=async(userName,userSurname,userRole,email,password, )=>{
    await pool.query(`
    UPDATE users SET userName=?, userSurname=?, userRole=?, email=?, password=?
    WHERE userID=? `,
     [userName,userSurname,userRole,email,password,userID])
     return getUsers()
}

const delUser=async(id)=>{
    const [user]=await pool.query(`
    DELETE FROM users WHERE userID=?`,[id])
   return getUsers(user)
}

const checkUser = async(userName)=>{
    const [[{password}]]= await pool.query(`
    SELECT password From users WHERE userName =?`,[userName])
        return password
    } 





export {getUsers,getSingleUser,addUser,editUser,delUser,checkUser}