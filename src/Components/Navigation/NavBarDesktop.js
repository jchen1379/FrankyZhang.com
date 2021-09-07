import React from "react";
import {NavLink} from "./NavLink";

export function NavBarDesktop() {
  return (
    <div className="header">
      <div className="name-brand">
        <a className="name" href="/">FRANKY ZHANG</a>
        <span className="title">Graphic Designer</span>
      </div>
      <div className="nav-bar">
        <NavLink path="/design">DESIGN</NavLink>
        <NavLink path="/advertising">ADVERTISING</NavLink>
        <NavLink path="/about">ABOUT</NavLink>
      </div>
    </div>
  );
}