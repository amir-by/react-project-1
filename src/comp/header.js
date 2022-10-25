import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="hide-when-mobile">
      
      <NavLink to='/'>
        <h1>Courses 4 Arab</h1>
      </NavLink>
      
      <ul className="flex">
        <li className="main-list">
          <NavLink className="main-link" to='/html'>
            
            HTML
          </NavLink>
          {/* <ul className="sub-ul">
            <li>
              <NavLink href="xxx">Full Course</NavLink>
            </li>
            <li>
              <NavLink href="xxx">Crash Course</NavLink>
            </li>
            <li>
              <NavLink href="xxx">learn in 1h</NavLink>
            </li>
          </ul> */}
        </li>
        <li className="main-list">
          <NavLink className="main-link" to='/css'>
            
            CSS
          </NavLink>
          {/* <ul className="sub-ul">
            <li>
              <NavLink href="xxx">Full Course</NavLink>
            </li>
            <li>
              <NavLink href="xxx">CSS Examples</NavLink>
            </li>
            <li className="mini-projects">
              <NavLink href="xxx">mini projects&nbsp; + </NavLink>
              <ul className="sub-sub-ul">
                <li>
                  <NavLink href="xxx">project 1</NavLink>
                </li>
                <li>
                  <NavLink href="xxx">project 2</NavLink>
                </li>
                <li>
                  <NavLink href="xxx">project 3</NavLink>
                </li>
              </ul>
            </li>
          </ul> */}
        </li>
        <li className="main-list">
          <NavLink className="main-link" to='/javascript'>
            
            JavaScript
          </NavLink>
          {/* <ul className="sub-ul sub-of-js">
            <li>
              <NavLink href="xxx">coming soon🔥</NavLink>
            </li>
          </ul> */}
        </li>
      </ul>
    </header>
    {/* <header style={{backgroundColor:'yellow'}}  className="show-when-mobile">
      <h1>Courses 4 Arab</h1>
      <label className="absolute" htmlFor="burger">
        <i className="fas fa-bars" />
      </label>
      <input id="burger" type="checkbox" />
      <div className="show-on-click">
        <div className="main-div">
          <label htmlFor="html">
            HTML <i className="fas fa-plus" />
          </label>
          <input id="html" type="checkbox" />
          <ul className="sub-div">
            <li>
              <NavLink href="ww">Full Course</NavLink>
            </li>
            <li>
              <NavLink href="ww">Crash Course</NavLink>
            </li>
            <li>
              <NavLink href="ww">learn in 1h</NavLink>
            </li>
          </ul>
        </div>
        <div className="main-div">
          <label htmlFor="css">
            CSS <i className="fas fa-plus" />
          </label>
          <input id="css" type="checkbox" />
          <ul className="sub-div">
            <li>
              <NavLink href="ww">Full Course</NavLink>
            </li>
            <li>
              <NavLink href="ww">CSS Examples</NavLink>
            </li>
            <li>
              <label className="mini-projects" htmlFor="mini">
                mini projects <i className="fas fa-plus" />
              </label>
              <input id="mini" type="checkbox" />
              <ul className="sub-sub-div">
                <li>
                  <NavLink href="ww">project 1</NavLink>
                </li>
                <li>
                  <NavLink href="xxx">project 2</NavLink>
                </li>
                <li>
                  <NavLink href="ww">project 3</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="main-div">
          <label htmlFor="js">
            JavaScript <i className="fas fa-plus" />
          </label>
          <input id="js" type="checkbox" />
          <ul className="sub-div">
            <li>
              <NavLink href="ww">coming soon🔥</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header> */}
    </div>
  );
}

export default Header;
