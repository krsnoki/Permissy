import '../styles/global.css'
import { Link } from 'react-router-dom'
import Hero from '../pages/hero';
import Login from '../pages/login';
import About from '../pages/about';


function Navbar() {
  return (
    <div className='nav'>
    <div className='navbar-container'>
      <ul className='item-list'>
        <li><Link to={Hero}>Home</Link></li>
        <li><Link to={About}>About</Link></li>
        <li><Link to={Login}>Login</Link></li>
        <li className='last-child'></li>
      </ul>
    </div>
    </div>
  );
}

export default Navbar;
