// import { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Anagram from './pages/Anagram';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/anagram'>Anagram</Link>
          </li>
        </ul>
      </nav>
      <title>Levi Fletcher</title>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anagram' element={<Anagram />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
