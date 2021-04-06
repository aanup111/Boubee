import React from 'react';
import '../css/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
   
    // get access to the cart
    const [ {user, cart} , dispatch] = useStateValue();   
    
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <h2 className='checkout_title'>Your shopping cart</h2>
                <h3>Hello {user? user.email.split('@')[0] : 'Guest, please sign in to continue'}</h3>
            
                {cart.map( item => (
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    /> ))}
            
            </div>

            <div className='checkout_right'>
                  <Subtotal />  
                
            </div>
        </div>
        ) }

export default Checkout
