import React from 'react'
import logo from './logo.png';


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
        </div>

        <div className = 'header_nav'>
            <div className = 'header_nav_user'>
                Guest
            </div>    
            <div className = 'header_nav_cart'>
                Cart Icon
            </div>


        </div>




        </div>
    )
}

export default Header
