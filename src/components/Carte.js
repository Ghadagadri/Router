import React from 'react';
import { useLocation } from 'react-router-dom';
const Carte = () => {
    const locction=useLocation()
const film= locction.state
    return (
        <div className='carte'>
            
            <img  style={{ width: 400}} src={film.posterurl} alt=''/>
            <h1>{film.name}</h1>
            <h2> {film.description}</h2>
            

        </div>
    );
}

export default Carte;
