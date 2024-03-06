import bcrypt from 'bcrypt'
import { getUsers,getSingleUser, addUser, editUser,delUser} from "../models/userDB.js"

export default{
   
    getManyUsers:async(req,res)=>{
        res.send( await getUsers())
    },
    getUser:async(req,res)=>{
        res.send(await getSingleUser(+req.params.id))
    },
    addUsers:async(req,res)=>{
        const { userName,userSurname,userRole,email,password} = req.body;
        bcrypt.hash(password,10,async(err,hash)=>{
            if (err) throw err
            await addUser(userName,userSurname,userRole,email,hash)
            res.send({
                msg:"you have created an account"
    
            } )
        })
    },
    updateUser:async(req,res)=>{
        
        let {userName,userSurname,userRole,email,password}=req.body
        const [user]=await getSingleUser(+req.params.id)
     
        userName ? userName=userName: {userName}=user
        userSurname? userSurname=userSurname: {userSurname}=user
        userRole ? userRole=userRole: {userRole}=user
        email ? email=email: {email}=user
        password ? password=password: {password}=user
        
        bcrypt.hash(password,10,async(err,hash)=>{
            if (err) throw err
            await editUser(userName,userSurname,userRole,email,hash ,+req.params.id)
        })
     
        res.json(await getUsers())
     
    },
    deleteUser:async(req,res)=>{
        res.send(await delUser(req.params.id)) 
    }

    }
