import './styles/global.css'

function Navbar() {
  return (
    <div className='nav'>
    <div className='navbar-container'>
      <ul className='item-list'>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
        <li className='last-child'></li>
      </ul>
    </div>
    </div>
  );
}

export default Navbar;
