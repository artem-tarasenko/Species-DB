import React, {useState, useEffect} from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import MaterialTable from '@material-table/core';

import endpoints from "./endpoints.jsx";



function Body() {

	const [source, setSource] = useState({})

	//let headers = [];	

	// if(tableHeaders.length < 1) {
	// 	console.log("Table headers reset to DEFAULT");
	// 	setTableHeaders(endpoints[0].headers);
	// }

//####################################################################################
//####################################################################################

	// function updateHeaders(arr) { 
	// 	headers = arr;
	// };

	// useEffect( () => fetch("http://localhost:1337/headers")
	// 	.then(res => res.json())
	// 	.then(items => updateHeaders(items)),
	// []);

//####################################################################################
//####################################################################################


	function changeEndpoint(e) {
		let userChoise = e.target.value-1;
		//setTableHeaders(endpoints[userChoise].headers);

		// console.group('On change');
		// console.log(endpoints[userChoise]);
		// console.groupEnd();

		setSource(endpoints[userChoise]);
	}

	function addSource() {
		setSource(endpoints[0]);
	}

	return <>
				<h1>All Data</h1>
					<div className="options">
						<label>Endpoint
						<select placeholder="Choose an endpoint" onChange={changeEndpoint}>
							{endpoints.map( item => <option key={item.id} value={item.id}>{item.name}</option>)}
						</select>
						</label>
						<button type="button" onClick={addSource}>ADD</button>
					</div>
				<hr />
				
			</>



}

export default Body;


//Conditionally render Table components with data
// Object.keys(source).length > 0 
// 	? <RsuiteTable source={source} /> 
// 	: <p>No table selected...</p>