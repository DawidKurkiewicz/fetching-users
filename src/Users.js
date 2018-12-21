import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


class Users extends React.Component {
  state = {
    data: []
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
        <ReactTable
            data={this.state.data}
            columns={[{
                Header: 'First Name',
                accessor: 'name.first'
            }, {
                Header: 'Last Name',
                accessor: 'name.last'
            }]}
            defaultPageSize = {5}
            showPageSizeOptions={false}

        />

    )
}
}

export default Users;
