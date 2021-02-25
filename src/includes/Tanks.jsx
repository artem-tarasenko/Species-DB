import React, {useState, useEffect} from "react";
import MaterialTable from '@material-table/core';
import axios from "axios";

import endpoints from "./endpoints.jsx";
import exportTable from "./reports/ExportTable.jsx";
import SingleEntity from "./SingleEntity.jsx";

function Tanks() {
	const [data, setData] = useState({headers: [], data: []}); //first array - headers to the table, second - table data
    const [selectedRow, setSelectedRow] = useState();
    const source = endpoints[1];
    const tableTitle = `Таблица "${source.localizedName}"`;
    
    useEffect( () => getPosts(), [source]);

    async function getPosts() {
        try {
            const fetchedData = await axios.get(source.link);
            const headers = endpoints.find( item => item.name === source.name).headers;; //Kinds

            setData({
                headers: headers,
                data: fetchedData.data
            })

        } catch (err) {
            console.error(err.message);
        }
    };

    function exportWrapper(cols, datas) { exportTable(cols, datas, tableTitle) }

    SingleEntity(data, "tank");

    console.log("TANKS", data);

    return  <div className="data-container">
                <MaterialTable 
                    columns={data.headers} 
                    data={data.data} 
                    title={tableTitle}
                    onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
                    options={{
                        columnsButton: true,
                        filtering: true,
                        paging: true,
                        filterCellStyle: { padding: "10px"},
                        pageSize: 10,
                        pageSizeOptions: [10, 30, 50, 100, 300],
                        emptyRowsWhenPaging: false,
                        exportMenu: [{ label: 'Сохранить в PDF', exportFunc: (cols, datas, tableTitle) => exportWrapper(cols, datas) }],
                        rowStyle: rowData => ({
                            backgroundColor: (selectedRow === rowData.tableData.id) ? '#e0ddef' : '#FFF'
                          })
                    }} 
                />
            </div>
}

export default Tanks;