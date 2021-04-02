import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders'

// key for Stripe payment processing
const promise = loadStripe('pk_test_51IanpZGS67IcsTs1tTCvW5WCl7wrW6OBejCITPkGSvsx4KKNVZpTFkzq3tVeNX7wlFuplf2afexF6YF6tfW03P3h0098hTDQu8');

function App() {
  const [{}, dispatch] = useStateValue();
  
  // listener for user logging in / out, will only run once when app loads
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser){
      // if user is logged in
      dispatch ({
        type: 'SET_USER',
        user: authUser
      })
      } else {
        dispatch ({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className="app">
        <Switch>
        <Route path ='/login'>
            <Login />
          </Route>
          <Route path ='/orders'>
            <Header />
            <Orders /> 
          </Route>
          <Route path ='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path ='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path ='/'>
            <Header />
            <Home />
          </Route>
         
        </Switch>
    </div>
    </Router>
  );
}

export default App;
