import React, { useState, useEffect } from "react";
import "../App.css";

function Shop() {
    const [vehicle, setVehicle] = useState([{
        name: '',
        vehicleType: ''
    }])
    
    useEffect(() => {
        fetch("/vehicles").then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => setVehicle(jsonRes));
    })
    return (
        <div>
            <h1>Shop</h1>
            {vehicle.map((vehicleInst, index) => 
                <div key = {index}>
                    <h3>{vehicleInst.name}</h3>    
                    <h3>{vehicleInst.vehicleType}</h3>
                </div>
            )}
        </div>
    );
};

export default Shop;