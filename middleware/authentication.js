// import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {checkUser} from '../models/userDB.js'

const auth = async(req,res,next)=>{
    // getting username and passsword from user
    const {password,userName}= req.body
    const hashedPassword=await checkUser(userName)
    bcrypt.compare(password,hashedPassword,(err,result)=>{
        if (err) throw err
        if(result===true){
            const {userName} = req.body
            const token = jwt.sign({userName:userName}, //jsonwebtoken does not authenticate but they allow the user access as long as they have a token
            process.env.SECRET_KEY,{expiresIn:'1h'}) //secret key is in the .env file
            // true only backend can access
            // res.cookie('jwt',token,{httpOnly:false})   
            res.send({
                // key name,value of the key
                token:token,
                msg:"you have logged in"
            }) 
           next()
        }else{
            res.send({msg:'The username or password is incorrect'})
        }
    })
}


const authenticate = (req,res,next) =>{
    let {cookie}= req.headers
    let tokenInHeader=cookie && cookie.split('=')[1]
    if (tokenInHeader===null)res.sendStatus(401)
    jwt.verify(tokenInHeader,process.env.SECRET_KEY,
    (err,user)=>{
        if(err) return res.sendStatus(403)
        req.user=user
        next()
    } )
}

export {auth,authenticate}