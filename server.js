import express from 'express'
import {config} from 'dotenv'
import productRouter from './routes/products.js'
import userRouter from './routes/users.js'
import loginRouter from './routes/login.js'
import cartRouter from './routes/cart.js'
import cors from 'cors'
import {auth,authenticate} from './middleware/authentication.js'
import cookieParser from 'cookie-parser'

config()
 

const PORT=process.env.PORT || 8200

const app=express()

app.use(cors(
   { origin:'http://localhost:8080',
    credentials:true}
))

app.use(express.json())

app.use(express.static('views')) 

app.use (cookieParser())

app.use('/products',productRouter)
app.use('/users',userRouter)
app.use('/login',auth,loginRouter)
app.use('/cart',authenticate,cartRouter)

app.listen(PORT,()=>{
    console.log(`This is running on http://localhost:${PORT}`);
})

