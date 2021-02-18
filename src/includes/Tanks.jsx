import React, {useState, useEffect} from "react";
import MaterialTable from '@material-table/core';
import axios from "axios";

import endpoints from "./endpoints.jsx";
import exportTable from "./reports/ExportTable.jsx";

function Tanks() {
	const [data, setData] = useState({headers: [], data: []}); //first array - headers to the table, second - table data
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

    return  <div className="data-container">
                <MaterialTable 
                    columns={data.headers} 
                    data={data.data} 
                    title={tableTitle}
                    options={{
                        columnsButton: true,
                        filtering: true,
                        paging: true,
                        pageSize: 10,
                        pageSizeOptions: [10, 30, 50, 100, 300],
                        emptyRowsWhenPaging: false,
                        exportMenu: [{ label: 'Сохранить в PDF', exportFunc: (cols, datas, tableTitle) => exportWrapper(cols, datas) }]
                    }} 
                />
            </div>
}

export default Tanks;