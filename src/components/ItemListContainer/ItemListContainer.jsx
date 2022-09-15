import React from 'react';
import IMG from '../img/img01.jpg';

const ItemListContainer = () => {
    return (
        <>
            <h1 className="title">PRODUCTOS</h1>
            <div className='productos'>
                <div className='producto'>
                    <a href="#">
                        <div className='producto__img'>
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1> Titulo </h1>
                        <p> Categoria </p>
                        <p className='price'> $850 </p>
                    </div>
                    <div className="buttom">
                        <button className='btn'>Añadir al Carrito</button>
                        <div>
                            <a href="#" className='btn'> Vista </a>
                        </div>
                    </div>
                </div>

                <div className='producto'>
                    <a href="#">
                        <div className='producto__img'>
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1> Titulo </h1>
                        <p> Categoria </p>
                        <p className='price'> $850 </p>
                    </div>
                    <div className="buttom">
                        <button className='btn'>Añadir al Carrito</button>
                        <div>
                            <a href="#" className='btn'> Vista </a>
                        </div>
                    </div>
                </div>

                <div className='producto'>
                    <a href="#">
                        <div className='producto__img'>
                            <img src={IMG} alt="" />
                        </div>
                    </a>
                    <div className='producto__footer'>
                        <h1> Titulo </h1>
                        <p> Categoria </p>
                        <p className='price'> $850 </p>
                    </div>
                    <div className="buttom">
                        <button className='btn'>Añadir al Carrito</button>
                        <div>
                            <a href="#" className='btn'> Vista </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export default ItemListContainer;
