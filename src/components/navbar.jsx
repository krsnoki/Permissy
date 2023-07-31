import '../styles/global.css'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <div className='nav'>
    <div className='navbar-container'>
      <ul className='item-list'>
        <li><Link to='/' style = {LinkStyle}>Home</Link></li>
        <li><Link to='/about' style={LinkStyle}>About</Link></li>
        <li><Link to='/login' style={LinkStyle}>Login</Link></li>
        <li className='last-child'></li>
      </ul>
    </div>
    </div>
  );

  
}

export default Navbar;

const LinkStyle = {
  color: 'white',
  textDecoration: 'none'
};