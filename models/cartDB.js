import {pool} from "../config/config.js";

const getCart= async()=>{
    const [item]=await pool.query(`
   SELECT * FROM cart `)
   return item
}

export {getCart}