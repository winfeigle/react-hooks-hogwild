import React from "react";

function Tile({name, specialty, greased, weight, medal, image}) {
    return(
        <div className="card ui eight wide column pigTile">
            <h3>{name}</h3>
            <p><b>Specialty:</b> {specialty}</p>
            <p><b>Greased:</b> {greased ? "Yes" : "No"}</p>
            <p><b>Weight:</b> {weight}</p>
            <p><b>Highest Medal Achieved:</b> {medal}</p>
            <img src={image} alt="hog" />
        </div>
    );
}

export default Tile;