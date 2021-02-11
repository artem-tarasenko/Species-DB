import React, {useState, useEffect} from "react";
import axios from "axios";

import {endpoints2} from "./endpoints.jsx";
import { useTable } from 'react-table';
import {dataRaw, columnsRaw} from "./RTD.jsx";

console.log(dataRaw);
console.log(columnsRaw);
 


 function ReactTable(props) {
    const [dataArrays, setDataArrays] = useState({headers: [], data: []}); //first array - headers to the table, second - table data
    const source = props.source;

    useEffect( () => getPosts(), [source]);

    async function getPosts() {
        try {
            const fetchedData = await axios.get(source.link);
            const headers = endpoints2.find( item => item.name == source.name).headers;; //Kinds

            // console.group('Axios');
            //     console.log("fetched data ## source.name ## headers");
            //     console.log(fetchedData.data);
            //     console.log(source.name);
            //     console.log(headers);
            // console.groupEnd();

            setDataArrays({
                headers: headers,
                data: fetchedData.data
            })
        } catch (err) {
            console.error(err.message);
        }
    };

    console.group('RE_RENDER REACT TABLE');
    console.log("Source ##  DataArrays"); 
    console.log(source);
    console.log(dataArrays);
    
    console.groupEnd();
    


    const data = React.useMemo( () => dataArrays.data, [source] )

    const columns = React.useMemo( () => dataArrays.headers, [source] )

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({ columns, data })
 

    return <>
        <p>React Table Page</p>
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
        <thead>
            {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                <th
                    {...column.getHeaderProps()}
                    style={{ borderBottom: 'solid 2px red', padding: '10px 20px' }}
                >
                    {column.render('Header')}
                </th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map(row => {
            prepareRow(row)
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return (
                    <td
                        {...cell.getCellProps()}
                        style={{ border: 'solid 1px gray', padding: '10px 20px'}}
                    >
                        {cell.render('Cell')}
                    </td>
                    )
                })}
                </tr>
            )
            })}
        </tbody>
        </table>
    </>
 }

 export default ReactTable;