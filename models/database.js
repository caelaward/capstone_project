import {pool} from "../config/config.js";

const getProducts= async()=>{
    const [result]=await pool.query(`
   SELECT * FROM products `)
   return result
}

const getSingleProduct=async(id)=>{
    const[item]=await pool.query(`
    SELECT * FROM products
    WHERE prodID= ?`,[id])
return item
}

const addProduct=async(prodName,quantity,description,category,price,prodURL,prodURL1,prodURL2,prodURL3)=>{
    await pool.query(`
    INSERT INTO products (prodName,quantity,description,category,price,prodURL,prodURL1,prodURL2,prodURL3) values(?,?,?,?,?,?,?,?,?) `,
    [prodName,quantity,description,category,price,prodURL,prodURL1,prodURL2,prodURL3])
}

const delProduct=async(id)=>{
    const [item]=await pool.query(`
    DELETE FROM products WHERE prodID=?`,[id])
   return getProducts(item)
}


export {getProducts,getSingleProduct,addProduct,delProduct}