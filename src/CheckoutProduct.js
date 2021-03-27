import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';


function CheckoutProduct({id, image, title, price, rating}) {
    
    // get access to the cart
    const [ {cart} , dispatch] = useStateValue(); 
   
    // remove item from cart
    
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    
    } 
    
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt ='' />
            
            <div className ='product_info' >
                <p className = 'product_title'>{title}</p>
                <p className = 'product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className ='product_rating'>
                    {Array(rating).fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                    </div>
                    <button onClick={removeFromCart}>Remove from cart</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
