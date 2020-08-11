import React from 'react';
import HeaderCart from "./Header-cart/HeaderCart";
import HeaderLogo from "./Header-logo/HeaderLogo";

function Header() {
    return (
        <div className="header">
            <div className="container">
                <HeaderLogo />
                <HeaderCart />
            </div>
        </div>
    );
}

export default Header;