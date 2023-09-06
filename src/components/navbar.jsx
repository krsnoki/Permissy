import '../styles/global.css'
import {  Router } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { debounce } from '../assets/helpers';

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.scrollY; // Use scrollY instead of pageYOffset

    setVisible(
      (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navbarStyles = {
    position: 'fixed',
    backgroundColor: 'grey',
    textAlign: 'center',
    transition: 'top 0.6s',
    top: visible ? '0' : '-60px', // Use 'top' CSS property to control visibility
  };

  return (
    <Router>
    <div className='nav' style={{navbarStyles}}>
    <div className='navbar-container'>
      <ul className='item-list'>
        <li><a to='/' style = {LinkStyle}>Home</a></li>
        <li><a href='#about' style={LinkStyle}>About</a></li>
        <li><a to='/login' style={LinkStyle}>Login</a></li>
        <li className='last-child'></li>
      </ul>
    </div>
   
    </div>
    </Router>
  );

  
}

export default Navbar;

const LinkStyle = {
  color: 'white',
  textDecoration: 'none'
};