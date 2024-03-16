import {pool} from "../config/config.js";

// const getCart= async()=>{
//     const [item]=await pool.query(`
//    SELECT * FROM cart   `)
//    return item
// }

const getCart = async (userID) => {
    const [result] = await pool.query(`
        SELECT cart.*, products.*
        FROM cart
        JOIN products ON cart.prodID = products.prodID
        WHERE cart.userID = ?
    `, [userID]);
        return result
}

const getSingleCart=async(id)=>{
    const[item]=await pool.query(`
    SELECT * FROM cart
    WHERE cartID=? `,[id])
return item
}

const addCart = async(quantity,prodID,userID)=>{
    await pool.query(`
   INSERT INTO cart (quantity,prodID,userID)
    VALUES(?,?,?,?)`,[quantity,prodID,userID])
}

const delCart=async(id)=>{
    const [item]=await pool.query(`
    DELETE FROM cart WHERE cartID=?`,[id])
   return getCart(item)
}

export {getCart,getSingleCart,addCart,delCart}