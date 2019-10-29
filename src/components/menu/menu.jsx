import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
  return (  
    <div className="c-menu">
      <div className="w-center">
        <ul className="c-menu__list">
          <li className="c-menu__item">
            <Link className="c-menu__link" to="/">Posts</Link>
          </li>
          <li className="c-menu__item">
            <Link className="c-menu__link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
 
export default Menu;
