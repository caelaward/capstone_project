import {pool} from "../config/config.js";

const getCarts= async()=>{
    const [item]=await pool.query(`
   SELECT * FROM cart   `)
   return item
}

// const getCart = async (userID) => {
//     const [result] = await pool.query(`
//         SELECT *
//         FROM cart
//         INNER JOIN products ON cart.prodID = products.prodID
//         WHERE cart.userID = ?
//     `, [userID]);
//         return result
// }

// const getCart = async (userID) => {
//     try {
//         const result = await pool.query(`
//             SELECT *
//             FROM cart 
//             INNER JOIN products ON cart.prodID = products.prodID
//             WHERE cart.userID = ?
//         `, [userID]); 
//         return result;
//     } catch (error) {
//         console.error('Error viewing cart:', error);
//         throw error;
//     }
// };

const getCart = async (userID) => {
    try {
        const [result] = await pool.query(`
        SELECT *
        FROM cart 
        INNER JOIN products ON cart.prodID = products.prodID
        INNER JOIN users ON cart.userID = users.userID
        WHERE cart.userID =? ;
        `, [userID]); 
        return result;
    } catch (error) {
        console.error('Error viewing cart:', error);
        throw error;
    }
}; 
getCart(14)
    .then(result => {
        console.log('Cart details:', result);
    })
    .catch(error => {
        console.error('Error viewing cart:', error);
    });


// const getSingleCart=async(id)=>{
//     const[item]=await pool.query(`
//     SELECT * FROM cart
//     WHERE cartID=? `,[id])
// return item
// }

// const addCart = async(quantity,prodID,userID)=>{
//     await pool.query(`
//    INSERT INTO cart (quantity,prodID,userID)
//     VALUES(?,?,?)`,[quantity,prodID,userID])
// }

const addCart = async ( quantity,prodID, userID) => {
    try {

        await pool.query(`
            INSERT INTO cart (quantity,prodID,userID)
            VALUES (?,?,?)
        `, [quantity, prodID, userID]);

        console.log('Product added to cart successfully.');
    } catch (error) {
        console.error('Error adding product to cart:', error);
        throw error; 
    }
};


// const quantity = 2; 
// const prodID=1 ; 
// const userID = 2; 

// addCart(quantity);


const delCart=async(id)=>{
    const [item]=await pool.query(`
    DELETE FROM cart WHERE cartID=?`,[id])
   return getCart(item)
}

export {getCart,addCart,delCart,getCarts}