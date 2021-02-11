import React, {useState, useEffect} from "react";
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'; // or 'rsuite-table/dist/css/rsuite-table.css'
import axios from "axios";

import endpoints from "../endpoints.jsx";




function RsuiteTable(props) {
    //props: Source, tableHeaders, data, name

	const [data, setData] = useState({headers: [], data: []}); //first array - headers to the table, second - table data

    let source = props.source;

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

    console.log("TABLE RE-RENDERED");

//##############################################################################
//##############################################################################
//##############################################################################
//##############################################################################

    const dataList = [
        { id: 1, name: 'a', email: 'a@email.com', avartar: '...' },
        { id: 2, name: 'b', email: 'b@email.com', avartar: '...' },
        { id: 3, name: 'c', email: 'c@email.com', avartar: '...' }
    ];

    const ImageCell = ({ rowData, dataKey, ...rest }) => (
        <Cell {...rest}>
            <img src={rowData[dataKey]} width="50" />
        </Cell>
    );

    return  <>
				<div className="data-container rsuite">
                <Table data={dataList} hover={true} >
                    <Column width={100} sortable fixed resizable>
                        <HeaderCell>ID</HeaderCell>
                        <Cell dataKey="id" />
                    </Column>

                    <Column width={100} sortable resizable>
                        <HeaderCell>Name</HeaderCell>
                        <Cell dataKey="name" />
                    </Column>

                    <Column width={300} sortable resizable>
                        <HeaderCell>Email</HeaderCell>
                        <Cell>
                            {(rowData, rowIndex) => {
                            return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>;
                            }}
                        </Cell>
                    </Column>

                    <Column width={100} resizable>
                        <HeaderCell>Avartar</HeaderCell>
                        <ImageCell dataKey="avartar" />
                    </Column>
                </Table>		
				</div>
            </>
}

export default RsuiteTable;