import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className="d-flex align-items-center">
        <h1 className="text-center m-3">Rick & Morty</h1>
        <div className="ml-auto">
          <nav>
            <ul className="nav ">
              <li className="list-item mx-2">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="list-item mx-2">
                <NavLink to="/character">Characters</NavLink>
              </li>
              <li className="list-item mx-2">
                <NavLink to="/location">Location</NavLink>
              </li>
              <li className="list-item mx-2">
                <NavLink to="/episode">Episode</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
