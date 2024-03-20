import {pool} from "../config/config.js";

const getCarts= async()=>{
    const [item]=await pool.query(`
   SELECT * FROM cart   `)
   return item
}

const getCart = async (userID) => {
    try {
        const [result] = await pool.query(`
        SELECT cartID, products.prodID, products.prodName, products.price, products.description,products.prodURL, SUM(cart.quantity) AS quantity
        FROM cart 
        INNER JOIN products ON cart.prodID = products.prodID
        INNER JOIN users ON cart.userID = users.userID
        WHERE cart.userID = ?
        GROUP BY products.prodID;
        `, [userID]); 
        return result;
    } catch (error) {
        console.error('Error viewing cart:', error);
        throw error;
    }
};

getCart()
    .then(result => {
        console.log('Cart details:', result);
    })
    .catch(error => {
        console.error('Error viewing cart:', error);
    });

const addCart = async ( prodID, userID) => {
    try {

        await pool.query(`
            INSERT INTO cart (prodID,userID)
            VALUES (?,?)
        `, [ prodID, userID]);

        console.log('Product added to cart successfully.');
    } catch (error) {
        console.error('Error adding product to cart:', error);
        throw error; 
    }
};


// const delCart=async(cartID)=>{
   
//         // Delete the item from the cart
//         await pool.query(`
//             DELETE FROM cart
//             WHERE cartID = ?
//         `, [cartID]);

// }

const delCart = async(cartID)=> {
    const [cart] = await pool.query(`
    delete from cart where cartID =?
    `,[cartID] 
    ) 
    return cart
}

export {getCart,addCart,delCart,getCarts}