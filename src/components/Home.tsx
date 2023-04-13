import React, { useState, useEffect } from "react";
import "../App.css";
import background from "../images/background.png"
function Home() {
    return (
        <div style={{ backgroundImage: `url(${background})`}}
            className="home">
            <h1 className="home-elements">Welcome to the Just Cause Shop</h1>
            <h2 className="home-elements">The one stop shop for your dictator</h2>
            <h2 className="home-elements">removal specialist equipment needs</h2>
        </div>
    );
};

export default Home;