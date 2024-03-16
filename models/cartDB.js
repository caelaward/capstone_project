import {pool} from "../config/config.js";

// const getCart= async()=>{
//     const [item]=await pool.query(`
//    SELECT * FROM cart   `)
//    return item
// }

// const getCart = async (userID) => {
//     const [result] = await pool.query(`
//         SELECT *
//         FROM cart
//         INNER JOIN products ON cart.prodID = products.prodID
//         WHERE cart.userID = ?
//     `, [userID]);
//         return result
// }

const getCart = async (userID) => {
    try {
        // Assuming you have a 'pool' object for database connection

        // Execute the SQL query to retrieve cart details
        const result = await pool.query(`
            SELECT *
            FROM cart 
            INNER JOIN products ON cart.prodID = products.prodID
            WHERE cart.userID = ?
        `, [userID]);

        // Return the result
        return result;
    } catch (error) {
        console.error('Error viewing cart:', error);
        throw error; // Propagate the error to the caller
    }
};


getCart()
    .then(result => {
        console.log('Cart details:', result);
    })
    .catch(error => {
        console.error('Error viewing cart:', error);
    });


const getSingleCart=async(id)=>{
    const[item]=await pool.query(`
    SELECT * FROM cart
    WHERE cartID=? `,[id])
return item
}

// const addCart = async(quantity,prodID,userID)=>{
//     await pool.query(`
//    INSERT INTO cart (quantity,prodID,userID)
//     VALUES(?,?,?)`,[quantity,prodID,userID])
// }

const addCart = async (quantity, prodID, userID) => {
    try {
        // Assuming you have a 'pool' object for database connection

        // Insert the product into the cart table
        await pool.query(`
            INSERT INTO cart (quantity, prodID, userID)
            VALUES (?, ?, ?)
        `, [quantity, prodID, userID]);

        console.log('Product added to cart successfully.');
    } catch (error) {
        console.error('Error adding product to cart:', error);
        throw error; // Propagate the error to the caller
    }
};

// Example usage:
const quantity = 2; // Or whatever quantity you want to add
// const prodID=1 ; // The ID of the product you want to add to the cart
// const userID = 2; // The ID of the user

addCart(quantity);


const delCart=async(id)=>{
    const [item]=await pool.query(`
    DELETE FROM cart WHERE cartID=?`,[id])
   return getCart(item)
}

export {getCart,getSingleCart,addCart,delCart}