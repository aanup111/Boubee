import React from 'react'
import '../css/Product.css'
import { useStateValue } from '../StateProvider';

function Product({id, title, image, price, rating}) {
    //pull info from data layer
    const [{ cart }, dispatch] = useStateValue();
    
    
    
    const addToCart = () => {
        // push item into data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    };
   
   
    return (
        <div className ='product'>
            <div className ='product_info' >
                <p className='product_title'>{title}</p>
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
            </div>

            <img 
            src = {image} alt ='' />

            <button onClick={addToCart}>Add to Cart</button>

        </div>
    )
}

export default Product
