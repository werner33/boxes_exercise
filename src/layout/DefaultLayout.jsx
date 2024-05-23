import {useState} from 'react';
import {
  Outlet, 
  Link
} from 'react-router-dom';

// COMPONENTS
import Navbar from './navbar/Navbar';

// STYLING
import './DefaultLayout.scss';

const DefaultLayout = () => {

  // what is it called when we move state from a child to a parent
  // while developing a react app? 
  // raising state or lifting state
  const [showNavbar, setShowNavbar] = useState(false);

  const closeNavbar = () => {
    setShowNavbar(false);
  }

  return (

    <div className="default-layout">
      <Navbar setShowNavbar={setShowNavbar} showNavbar={showNavbar} />
      <div className="navbar__mobile-menu-items" style={{"display" : showNavbar ? "block" : "none", "color" :"black"}}>
        <ul onClick={closeNavbar}>
          <Link to="/" className="navbar__menu-item"><li>Home</li></Link>
          <Link to="/pets" className="navbar__menu-item"><li>Pets</li></Link>
          <Link to="/about" className="navbar__menu-item"><li>About</li></Link>
        </ul>
      </div>
      <div className="default-layout__page-content" >
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout;