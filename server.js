import express from 'express'
import {config} from 'dotenv'
import productRouter from './routes/products.js'
import userRouter from './routes/users.js'
import loginRouter from './routes/login.js'
import auth from './middleware/middleware.js'

config()
 

const PORT=process.env.PORT || 8200

const app=express()

// app.use(cors())

app.use(express.json())

app.use(express.static('views')) 

app.use('/products',productRouter)
app.use('/users',userRouter)
app.use('/login',auth,loginRouter)

app.listen(PORT,()=>{
    console.log(`This is running on http://localhost:${PORT}`);
})

