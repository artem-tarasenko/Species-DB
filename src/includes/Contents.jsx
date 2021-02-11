import React, {useState, useEffect} from "react";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import MaterialTable from '@material-table/core';
import axios from "axios";

import endpoints from "./endpoints.jsx";

function Contents() {
    //props: Source, tableHeaders, data, name

	const [data, setData] = useState({headers: [], data: []}); //first array - headers to the table, second - table data

    let source = endpoints[3];
    // useEffect( () => fetchData(source.link), [source]);

	// function fetchData(link) {
	// 	fetch(link)
	// 		.then(res => res.json())
	// 		.then(data => setData(data));
	// }

    // useEffect(async () => {
    //     const result = await axios(props.source);
    //     setData(result.data);
    //   }, []);

    
    useEffect( () => getPosts(), [source]);

    async function getPosts() {
        try {
            const fetchedData = await axios.get(source.link);

            const headers = endpoints.find( item => item.name == source.name).headers;; //Kinds

            // console.group('Axios');
            //     console.log("fetched data ## source.name ## headers");
            //     console.log(fetchedData.data);
            //     console.log(source.name);
            //     console.log(headers);
            // console.groupEnd();

            setData({
                headers: headers,
                data: fetchedData.data
            })
            


        } catch (err) {
            console.error(err.message);
        }
    };

    console.group('TABLE');
        console.log("TABLE RE-RENDERED");
        console.log(source);
        //console.log(headers);
        console.log(data);
    console.groupEnd();

    return  <>
                <h3>Maretial UI Table component</h3>
				<div className="data-container">
					{/* <MaterialTable
						// columns = {[{field: "surname", title: "Surname"}, {field: "name", title: "name"}, {field: "nick", title: "Nickname"}, {field: "age", title: "Age"}]}
						columns = {data.headers}
						data={data.data}
						title={props.source.name ? `${props.source.name} table` : null}
					/>			 */}
                    <MaterialTable columns={data.headers} data={data.data} title="Contents table" />
				</div>
            </>
}

export default Contents;