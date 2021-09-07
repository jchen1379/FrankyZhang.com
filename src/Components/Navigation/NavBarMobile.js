import React from "react";
import {MobileNavLink} from "./NavLink";

export function NavBarMobile() {
  return (
    <>
      <nav className="mobile-nav-bar navbar">
        <div className="collapse navbar-collapse" id="mobile-navbar">
          <ul className="navbar-nav">
            <MobileNavLink path="/design">DESIGN</MobileNavLink>
            <MobileNavLink path="/advertising">ADVERTISING</MobileNavLink>
            <MobileNavLink path="/about">ABOUT</MobileNavLink>
            <div className="breakline"/>
          </ul>
        </div>
      </nav>

      <div className="mobile-nav-bar">
        <a className="navbar-toggler mobile-navlink" data-toggle="collapse" data-target="#mobile-navbar">MENU</a>
      </div>
    </>
  );
}