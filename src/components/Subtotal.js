import React, { useEffect, useState } from 'react';
import '../css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getCartTotal } from '../Reducer';
import { useHistory } from 'react-router';

function Subtotal() {
    //get browser history
    const history = useHistory();
    //get access to the cart
    const [ {user, cart} , dispatch] = useStateValue();
    const [disabeled, setDisabeled] = useState(true);
    
    useEffect(() => {
        if(cart.length > 0) {
            setDisabeled(false);
        }
    },[cart])
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
            <button disabled={disabeled} onClick={e => user?history.push('/payment'):history.push('/login')}>{user? 'Proceed to checkout': 'Sign in to continue'}</button>
        </div>
    )
}

export default Subtotal
