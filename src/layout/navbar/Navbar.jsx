
import {useState} from 'react';
import { 
  Link
} from 'react-router-dom';

const Navbar = ({setShowNavbar, showNavbar}) => {

  const toggleNavbar = () => {

    // what do we want to do? 

    // toggle state to show navbar

    // turn hamburger into an x

    // show the menu items
    setShowNavbar(!showNavbar);
  }

  
  return (
      <nav className="navbar">
        <div className="navbar__content">
          <div className="navbar__logo">
            <Link to="/" className="navbar__menu-item">Pokedex</Link>
          </div>
          <div className="navbar__menu-items">
            <ul>
              <Link to="/" className="navbar__menu-item"><li>Home</li></Link>
              <Link to="/pets" className="navbar__menu-item"><li>Pets</li></Link>
              <Link to="/about" className="navbar__menu-item"><li>About</li></Link>
            </ul>
          </div>
          <div 
              className="navbar__hamburger"
              onClick={toggleNavbar}
              style={{"display" : "none"}}>
              {showNavbar ? 'X' : '='}
          </div>
        </div>
      </nav>
  )
}

export default Navbar;