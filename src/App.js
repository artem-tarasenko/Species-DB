import bootstrap from 'bootstrap';
import Nav from "./includes/components/Nav.jsx";
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import Search from "./includes/Search.jsx";
import Contents from "./includes/Contents.jsx";
import Zones from "./includes/Zones.jsx";
import Tanks from "./includes/Tanks.jsx";
import Species from "./includes/Species.jsx";


function App() {


	return (
	<Router>
		<main className="App">
			<header className="App-header">
				<Nav />
			</header>
			<section className="container">
				
				<Switch>
					<Route path="/" exact><Search /></Route>
					<Route path="/species"><Species /></Route>
					<Route path="/contents"><Contents /></Route>
					<Route path="/zones"><Zones /></Route>
					<Route path="/tanks"><Tanks /></Route>
				</Switch>
			</section>
		</main>

	</Router>
	);
}

export default App;
