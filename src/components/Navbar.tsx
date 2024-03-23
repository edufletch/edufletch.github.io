import { Link, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Anagram from '../pages/Anagram';
import NotFound from '../pages/NotFound';

function Navbar() {
  return (
    <>
      <h1>Levi Fletcher</h1>
      <h2>Hi, Anna. Yes, they work... I think.</h2>
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/anagram' element={<Anagram />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Navbar;
