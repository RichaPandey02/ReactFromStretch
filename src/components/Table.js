import React from 'react'
import { AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
function Table() {
    const data=[
        {name:'Richa', age:24},
        {name:'Rohit', age:23},
        {name:'Rajveer', age:23},
    ]
    const columns=[
        {headerName:"Name",field:'name',sortable:true,editable:true,filter:true},
        {headerName:"Age",field:'age',sortable:true,editable:true,filter:true},
    ]
    return (
        <div className="ag-theme-alpine"
        style={{
            height:'250px',
            width:'600px'
        }}>
            <AgGridReact rowData={data} columnDefs={columns}/>
        </div>
    )
}

export default Table
