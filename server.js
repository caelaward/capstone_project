import express from 'express'
import {config} from 'dotenv'
import productRouter from './routes/products.js'
import userRouter from './routes/users.js'
import jwt from 'jsonwebtoken'
config()
 

const PORT=process.env.PORT || 8200

const app=express()

// app.use(cors())

app.use(express.json())

app.use(express.static('views')) 

app.use('/products',productRouter)
app.use('/users',userRouter)

app.listen(PORT,()=>{
    console.log(`This is running on http://localhost:${PORT}`);
})

