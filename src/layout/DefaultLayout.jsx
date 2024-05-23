import {
  Outlet, 
  Link
} from 'react-router-dom';

import './DefaultLayout.css';

const DefaultLayout = () => {

  return (

    <div className="default-layout">
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
          <div className="navbar__hamburger" style={{"display" : "none"}}>
            =
          </div>
        </div>
      </nav>
      <div className="default-layout__page-content" >
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout;