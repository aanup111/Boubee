import React from 'react'
import '../css/Home.css'
import Product from './Product'
import product1 from '../images/product1.png'
import product2 from '../images/product2.png'
import product3 from '../images/product3.png'
import product4 from '../images/product4.png'
import product5 from '../images/product5.png'
import product6 from '../images/product6.png'
import product7 from '../images/product7.png'
import product8 from '../images/product8.png'
import product9 from '../images/product9.png'
function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
            
           <div className='home_row'>
                <Product title={'Sony Headphones'} image={product1} price={59.99} rating={4} id={'1'} />
                <Product title={'Apple Airpods Pro'} image={product9} price={299.99} rating={5} id={'2'} />
           </div>

            <div className='home_row'>
            <Product title={'BenQ 27 inch Curved Monitor'} image={product2} price={499.99} rating={4} id={'3'} />
            <Product title={'Apple Pen'} image={product3} price={110.99} rating={3} id={'4'} />
            <Product title={'Sony Airbuds'} image={product4} price={49.99} rating={2} id={'5'} />  
            </div>
    
            <div className='home_row'>
            <Product title={'White Kitten Plush Toy'} image={product5} price={15.99} rating={5} id={'6'} />
            <Product title={'Reversible Plush Toy'} image={product6} price={20.99} rating={4} id={'7'} />
            <Product title={'Mochi Puni Penguin'} image={product7} price={29.99} rating={5} id={'8'} />
            <Product title={'Mochi Puni Dog'} image={product8} price={25.99} rating={3} id={'9'} />
                
            </div>
    
    

                
            </div> 
           
        </div>
    )
}

export default Home
