import './App.css';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import { useState } from 'react';
import { Routes , Route } from 'react-router-dom';
import Carte from './components/Carte';



function App() {
  const [text, SetText] = useState('');
  
  return (
    <div className="App">
      <Navbar SetText={SetText}/>
      <Routes>
      < Route path='/' element={ <MovieList text={text}/>}/>
      < Route path='/movie/details' element={ <Carte/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
