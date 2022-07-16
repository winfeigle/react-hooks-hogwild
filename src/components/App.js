import React from "react";
import Nav from "./Nav";
import AllTiles from "./AllTiles"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<AllTiles hogs={hogs}/>
		</div>
	);
}

export default App;
