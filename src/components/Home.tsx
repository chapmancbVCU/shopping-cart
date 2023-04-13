import React, { useState, useEffect } from "react";
import "../App.css";
import background from "../images/background.png"
import { Link } from "react-router-dom";
function Home() {

    return (
        <div style={{ backgroundImage: `url(${background})`}}
            className="home">
            <h1 className="home-elements welcome">Welcome to the Just Cause Shop</h1>
            <h2 className="home-elements">The one stop shop for your dictator</h2>
            <h2 className="home-elements">removal specialist equipment needs</h2>
            <Link className="home-elements" to="shop">
                <button className="shop-button">Shop</button>
            </Link>
        </div>
    );
};

export default Home;