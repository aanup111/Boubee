import React from 'react';
import logo from './logo.png';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function Header() {
    return (
        <div className='header'>
            <img 
                className='header_logo'
                src ={logo}
            />
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
                    <ShoppingCartIcon
                    className='header_shoppingcartIcon' />
                  <span className='header_shoppingcartCount'>0</span>
            </div>
        </div>





        </div>
    )
}

export default Header
