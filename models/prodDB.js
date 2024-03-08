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

const addProduct=async(prodName,description,category,price,prodURL,prodURL1,prodURL2,prodURL3)=>{
    await pool.query(`
    INSERT INTO products (prodName,description,category,price,prodURL,prodURL1,prodURL2,prodURL3) values(?,?,?,?,?,?,?,?) `,
    [prodName,description,category,price,prodURL,prodURL1,prodURL2,prodURL3])
}

const delProduct=async(id)=>{
    const [item]=await pool.query(`
    DELETE FROM products WHERE prodID=?`,[id])
   return getProducts(item)
}

const editProduct=async(prodName,description,category,price,prodURL,prodURL1,prodURL2,prodURL3,prodID)=>{
    await pool.query(`
    UPDATE products SET prodName=?, description=?, category=?, price=?, prodURL=?, prodURL1=?, prodURL2=?, prodURL3=? 
    WHERE prodID=? `,
     [prodName,description,category,price, prodURL,prodURL1,prodURL2,prodURL3,prodID])
     return getProducts()
}







export {getProducts,getSingleProduct,addProduct,delProduct,editProduct}