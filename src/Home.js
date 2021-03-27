import React from 'react'
import './Home.css'
import Product from './Product'
import backgroundImage from './background.PNG'
const title = 'Rasberry Lip Gloss';
const image =  backgroundImage;
const price = 10.99; 
const rating = 5;
const id = '1'
function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
            
           <div className='home_row'>
                <Product title={title} image={image} price={price} rating={rating} id={id} />
                
                   
            </div>

            <div className='home_row'>
            <Product title={title} image={image} price={price} rating={rating} />
            <Product title={title} image={image} price={price} rating={rating} />
            <Product title={title} image={image} price={price} rating={rating} />  
            </div>
    
            <div className='home_row'>
            <Product title={title} image={image} price={price} rating={rating} />
            <Product title={title} image={image} price={price} rating={rating} />
            <Product title={title} image={image} price={price} rating={rating} />
            <Product title={title} image={image} price={price} rating={rating} />
                
            </div>
    
    

                
            </div> 
           
        </div>
    )
}

export default Home
