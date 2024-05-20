import React from "react";
import { RiLinkM } from "react-icons/ri";
import "./style.css";
import Button from "../Button";
const NavBar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <RiLinkM />
        <h4>ramos</h4>
      </div>
      <ul className="tabs">
        <li>Dashboard</li>
        <li>Reports</li>
        <li>Documents</li>
        <li>History</li>
        <li>Settings</li>
      </ul>
      <Button>Sign up</Button>
    </nav>
  );
};

export default NavBar;
