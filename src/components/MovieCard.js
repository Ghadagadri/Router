// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Carte from './Carte';
 
const MovieCard = ( {film} ) => {
    // const [show, setShow] = useState(false);
    return (
        <Link to={`/movie/details`} state={film}>
        <div className='card'>
            
            <img src={film.posterurl}/>
            <h1>{film.name}</h1>
           <h3> {film.description} </h3>
          <h4>  {film.rating}</h4>
               
              {/* /* {show ? <Carte film ={film}/> : null} */  }

             </div>
             </Link>



        )}



        
    


export default MovieCard;
