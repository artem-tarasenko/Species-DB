import React from "react";
import {Link} from "react-router-dom";

function Nav() {
	return <React.Fragment>
			
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
					<div className="container">
						<a className="navbar-brand" href="#">Species DB</a>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarsExample07">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item active">
							<Link to="/" className="nav-link">Поиск</Link>
							</li>
							<li className="nav-item">
							<Link to="/species" className="nav-link">Виды</Link>
							</li>
							<li className="nav-item">
							<Link to="/contents" className="nav-link">Контент</Link>
							</li>
							<li className="nav-item">
							<Link to="/zones" className="nav-link">Зоны</Link>
							</li>
							<li className="nav-item">
							<Link to="/tanks" className="nav-link">Танки</Link>
							</li>
						</ul>
					</div>
					</div>
				</nav>			
			</React.Fragment>
	}

	export default Nav;
