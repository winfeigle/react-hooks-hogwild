import React from "react";
import Tile from "./Tile";

function AllTiles({hogs}) {
    const displayTiles = hogs.map(hog => {
       return(
        <Tile 
            key={hog.name}
            name={hog.name} 
            specialty={hog.specialty} 
            greased={hog.greased} 
            weight={hog.weight}
            medal={hog["highest medal achieved"]}
            image={hog.image}
            />
       );
    })

    return(
        <div className="ui grid container">
            {displayTiles}
        </div>
    );
}

export default AllTiles;