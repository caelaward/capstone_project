import {pool} from "../config/config.js";

const getCart= async()=>{
    const [item]=await pool.query(`
   SELECT * FROM cart `)
   return item
}

const getSingleCart=async(id)=>{
    const[item]=await pool.query(`
    SELECT * FROM cart
    WHERE cartID= ?`,[id])
return item
}

const addCart = async(quantity,prodID,userID)=>{
    await pool.query(`
   INSERT INTO users (quantity,prodID,userID)
    VALUES(?,?,?,?)`,[quantity,prodID,userID])
}

const editCart=async(quantity,prodID,userID,cartID)=>{
    await pool.query(`
    UPDATE users SET quantity=?, prodID=?,userID=?
    WHERE cartID=? `,
     [quantity,prodID,userID,cartID,])
     return getUsers()
}

const delCart=async(id)=>{
    const [item]=await pool.query(`
    DELETE FROM users WHERE cartID=?`,[id])
   return getCart(item)
}

export {getCart,getSingleCart,addCart,editCart,delCart}