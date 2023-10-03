import React from "react";
import {NavLink} from "./NavLink";

export function NavBarDesktop() {
  return (
    <div className="header">
      <a className="name-brand" href="/">
        <img src={require("../../Projects/franky_zhang_logo.png").default}/>
      </a>
      <div className="nav-bar">
        <NavLink path="/design">DESIGN</NavLink>
        <NavLink path="/advertising">ADVERTISING</NavLink>
        <NavLink path="/about">ABOUT</NavLink>
      </div>
    </div>
  );
}