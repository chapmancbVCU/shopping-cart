import React, { useState, useEffect } from "react";
import "../App.css";
import background from "../images/background.png"
function Home() {
    return (
        <div style={{ backgroundImage: `url(${background})`}}
            className="home">
            <h1>Home</h1>
        </div>
    );
};

export default Home;