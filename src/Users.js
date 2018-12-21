import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


class Users extends React.Component {
  state = {
    data: [],
    searchText: ''

  };
  componentDidMount() {
    fetch("https://randomuser.me/api?results=15")
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data.results
        })
      );
  }
  render() {
    return (
      <div>
        <ReactTable
          data={this.state.data}
          filterable={true}
          columns={[{
            Header: 'First Name',
            accessor: 'name.first'
          }, {
            Header: 'Last Name',
            accessor: 'name.last'
          }]}
          defaultPageSize={5}
          showPageSizeOptions={false}

        />
      </div>

    )
  }
}

export default Users;
