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
import SingleEntity from "./includes/SingleEntity.jsx";


function App() {


	return (
	<Router>
		<main className="App">
			<header className="App-header sticky">
				<Nav />
			</header>
			<section className="container wide" maxWidth="xl">
				
				<Switch>
					<Route exact path="/" component={Search} />
					<Route path="/species" component={Species} />
					<Route path="/contents" component={Contents} />
					<Route path="/zones" component={Zones} />
					<Route path="/tanks" component={Tanks} />
					{/* <Route path="/entity" component={SingleEntity} /> */}
					<Route path="/entity" render={ (props) => <SingleEntity {...props} /> }/>
				</Switch>
			</section>
		</main>

	</Router>
	);
}

export default App;
