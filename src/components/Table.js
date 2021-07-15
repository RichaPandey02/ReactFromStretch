import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
function Table() {
  // const data=[
  //     {name:'Richa', age:24},
  //     {name:'Rohit', age:23},
  //     {name:'Rajveer', age:23},
  // ]
  const columns = [
    {
      headerName: "postId",
      field: "postId",
      sortable: true,
      editable: true,
      filter: true,
      checkboxSelection: true,
    },
    {
      headerName: "id",
      field: "id",
      sortable: true,
      editable: true,
      filter: true,
    },
    {
        headerName: "name",
        field: "name",
        sortable: true,
        editable: true,
        filter: true,
      },
      {
        headerName: "email",
        field: "email",
        sortable: true,
        editable: true,
        filter: true,
      },
      {
        headerName: "body",
        field: "body",
        sortable: true,
        editable: true,
        filter: true,
      },
  ];
  const onGridReady = (params) => {
    console.log("grid is ready");
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((resp) => resp.json())
      .then((resp) => params.api.applyTransaction({add:resp}));
      
  };
  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "250px",
        width: "600px",
      }}
    >
      <AgGridReact columnDefs={columns} onGridReady={onGridReady} />
    </div>
  );
}

export default Table;
