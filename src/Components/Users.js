import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


class Users extends React.Component {
  state = {
    data: [],
    searchText: ''

  };

  componentDidMount() {
    const input = document.querySelector(".input")
    document.querySelector(".button").addEventListener("click", ()=>{
      fetch(`https://randomuser.me/api?results=${input.value}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data.results
        })
      )
    })
  
  };

  render() {
    return (
      <div>
        <div style={{display:"flex", justifyContent:"center"}} className={"center"}>
        <input className={"input"} type={"number"} value=1 placeholder="Type your number here"></input>
        <button style={{padding:"10px"}}  className={"button"}>Get users Data</button>
        </div>
        <ReactTable
          className={'-striped'}
          data={this.state.data}
          filterable
          columns={[{
            Header: 'First Name',
            accessor: 'name.first'
          }, {
            Header: 'Last Name',
            accessor: 'name.last'
          }]}
          defaultPageSize={10}
          showPageSizeOptions={true}
        />
      </div>

    )
  };
};

export default Users;
