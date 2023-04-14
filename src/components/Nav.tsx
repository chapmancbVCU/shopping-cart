import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Nav() {

    const navStyle = {
        color: 'white'
    }

    return (
        <nav>
            <Link className="nav-link home-link" style={navStyle}to="/">
                <h3>Just Cause Shop</h3>
            </Link>
            <ul className="nav-links">
                <Link className="nav-link" style={navStyle} to="shop">
                    <li>Shop</li>
                </Link>
                <Link className="nav-link" style={navStyle}to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;