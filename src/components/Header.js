import React from 'react';
import logo from '../images/logo.png';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../Firebase';


function Header() {
    //pull info from data layer
    const [ {cart, user} , dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    
    return (
        <div className='header'>
         <Link to='/'>  
                <img 
                    className='header_logo'
                    src ={logo} alt =''
                />
         </Link>  
        <div className = 'header_search' >
            <input
            className='header_search' type ='text' />
            <SearchIcon 
            className='header_searchIcon' />
        </div>

        <div className = 'header_nav'>
            <Link to ={!user && '/login'}>
                <div onClick={handleAuthentication} className = 'header_nav_user'>
                <span>Hello {!user? 'Guest' : user.email.split('@')[0]}</span> 
                <span> {user? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>       
            
            <Link to ={'/orders'}>
                <div className='header_nav_orders'>
                    <span>Order history</span>
                </div>
            </Link>
                
            <div className = 'header_nav_cart'>
                    <Link to='/checkout'>
                    <ShoppingCartIcon
                    className='header_shoppingcartIcon' />
                    </Link>
                  <span className='header_shoppingcartCount'>{cart?.length}</span>
            </div>
        </div>





        </div>
    )
}

export default Header
