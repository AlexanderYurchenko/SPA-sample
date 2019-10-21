import React from 'react';
import './menu.scss';

const Menu = () => {
  return (
    <div className="c-menu">
      <div className="w-center">
        <ul className="c-menu__list">
          <li className="c-menu__item">Posts</li>
          <li className="c-menu__item">Contact</li>
        </ul>
      </div>
    </div>
  );
}
 
export default Menu;