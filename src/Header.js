import React from 'react';
import logo from './image0.jpeg';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {
    //pull info from data layer
    const [ {cart} , dispatch] = useStateValue();
    
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
            <div className = 'header_nav_user'>
                Hello Guest
            </div>    
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
