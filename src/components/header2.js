import React from 'react'
import "./styles/header2.css";
import { Link } from 'react-router-dom';
import recipes3 from './recipes3';

const Header2 = () => {
    return (
        <div className='menu-container'>
            <div className='menu-headerh2'>
                <h2 className='h2titlehead'>This week specials!</h2>
                <Link to="/menulist"><button className='btntitlehead'>Online Menu</button></Link>
            </div>
            <div className='cardsh2'>
                {
                    recipes3.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt=''/>
                        <div className='menu-content'>
                            <div className='heading'> 
                                <h5 className='recipetitle'>{recipe.title}</h5>
                                <p className='recipeprice'>{recipe.price}</p>
                            </div>
                            <p className='recipedesc'>{recipe.description}</p>
                            <Link to="/orderonline"><button className='orderBtnh2'>Order Now</button></Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
      )
}

export default Header2;