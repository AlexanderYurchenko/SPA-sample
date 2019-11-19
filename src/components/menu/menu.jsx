import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss';

class Menu extends Component {
  state = {
    isOpen: false
  }

  toggleMenu = (event) => {
    event.preventDefault();
    const body = document.body;
    const menuWrap = document.getElementsByClassName("js-menu-wrap")[0];

    if (!this.state.isOpen) {
      body.classList.add("modal-open");
      menuWrap.classList.add("open");
    } else {
      body.classList.remove("modal-open");
      menuWrap.classList.remove("open");
    }

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeMenu = () => {
    const menuWrap = document.getElementsByClassName("js-menu-wrap")[0];
    menuWrap.classList.remove("open");

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() { 
    return (  
      <div className="c-menu">
        <div className="c-menu__fix">
          <div className="w-center c-menu__center js-menu-wrap">
            <button className="c-menu__btn" onClick={this.toggleMenu}>
              <span className="c-menu__line c-menu__line-1"></span>
              <span className="c-menu__line c-menu__line-2"></span>
              <span className="c-menu__line c-menu__line-3"></span>
            </button>
            <ul className="c-menu__list">
              <li className="c-menu__item">
                <NavLink className="c-menu__link" exact to="/" activeClassName="active" onClick={this.closeMenu}>Posts</NavLink>
              </li>
              <li className="c-menu__item">
                <NavLink className="c-menu__link" to="/contact" activeClassName="active" onClick={this.closeMenu}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Menu;
