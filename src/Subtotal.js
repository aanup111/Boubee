import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getCartTotal } from './Reducer';

function Subtotal() {
    
    // get access to the cart
    const [ {cart} , dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                        Subtotal ({cart.length} items): <strong>{value}</strong>
                    </p>
                  </>  
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
