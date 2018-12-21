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
      <div>

        {this.state.data &&
          this.state.data.map(user => (
            <div key={user.login.uuid}>
              <div>
                {user.name.first} {user.name.last}
              </div>
            </div>
          ))}
      </div>
    );
  }
}
export default Users;
