import { useStripe, useElements, cardElement, CardElement } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './Reducer';
import { Link, useHistory } from 'react-router-dom';
import axios from './Axios';


function Payment() {
   // get access to the cart
   const [ {cart, user} , dispatch] = useStateValue(); 
   
   const history = useHistory();
   const [error, setError] = useState(null);
   const [disabled, setDisabled] = useState(true);
   const [succeeded, setSucceeded] = useState(false);
   const [processing, setProcessing] = useState('');
   // something to let stirpe process payment
   const [clientSecret, setClientSecret] = useState(true);
   const stripe = useStripe();
   const elements = useElements();

    useEffect (() => {
        // generate the client secret code to allow customer charge whenever cart changes

        const getClientSecret = async () => {
            const response = await axios ({
                method: 'post',
                // stripe expects total amount in subunits (ie cents)
                url: `/payments/create?total=${getCartTotal(cart) * 100}`
            })
            setClientSecret(response.data.clientSecret)

        }
        
        getClientSecret();
     }, [cart])

   // process card payment
   const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        // uses client secret to send all the info to stripe
        const payload = await stripe.confirmCardPayment(clientSecret,  {
           payment_method: {
                card: elements.getElement(cardElement)
           } 
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders')
        })
      
    
    }


   const handleChange = event => {
        // Listen for changes in the card element and display any errors for card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    }
    
    return (
        <div className='payment'>
            <div className ='payment_container'>
                <h1>Checkout {cart.length} items</h1>

                <div className ='payment_section'>
                    <div className ='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className ='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 street</p>
                        <p>Vancouver, BC</p>
                    </div>
                </div>

                <div className ='payment_section'>
                    <div className ='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className ='payment_items'>
                        {cart.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className ='payment_section'>
                    <div className ='payment_title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment_details' >
                          <form onSubmit={handleSubmit}>
                              
                              <CardElement onChange={handleChange} />
                          
                              <div className = 'payment_priceContainer'>
                              <CurrencyFormat
                                renderText={(value) => (
                                   <h3>Oder Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                             />
                             <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>processing</p>
                                           : "Buy Now"} </span>
                              </button>      
                             </div>
                                 {error && <div>{error}</div>}       
                          </form>                  
                        

                                      

                    </div>
                </div>






            </div>
        </div>
    )
}

export default Payment
