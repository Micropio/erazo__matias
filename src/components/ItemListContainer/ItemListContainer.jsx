import React from 'react';
import img01 from '../img/img01.jpg';

const ItemListContainer = () => {
    return (
        <>
        <h1 className="title">PRODUCTOS</h1>
        <div className='productos'>
            <a href="#">
            <div className='productos'>
                <img src={img01} alt="" />
            </div>
            </a>
            <div className='producto__footer'>
                <h1> Titulo </h1>
                <p> Categoria </p>
                <p className='price'> $850 </p>
            </div>
            <div className="button">
            <button className='btn'>
                Añadir al Carrito
            </button>
            <div>
            <a href="#" className='btn'> Vista </a>
            </div>
            
            </div>
        </div>
        </>
    );
}

export default ItemListContainer;
