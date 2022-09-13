import React from 'react';
import logo from '../img/logo.jpg';

const Index = () => {
    return (
        <header>
            <a href="#">
                <div className="logo"> 
                <img src={logo} alt="logo" width={150} /> 
                </div>
            </a>
            <ul>
                <li>
                    <a href="#">INICIO</a>
                </li>
                <li>
                    <a href="#">PRODUCTOS</a>
                </li>
                <div className='cart'>
                <box-icon name="cart"></box-icon>
                <span className='item__total'>0</span>
                </div>
            </ul>


        </header>
    );
}

export default Index;
