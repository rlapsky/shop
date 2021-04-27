import React from "react";

const Header = () => {
  return (
    <header>
      <a href="#">Apple Clab</a>
      <nav>
        <ul className="list">
          <li className="listItem">
            <a href="#" className="listLink">
              HOME
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="listLink">
              PRODUCTS
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="listLink">
              ADMIN
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="listLink">
              Registration
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="listLink">
              LOGIN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
