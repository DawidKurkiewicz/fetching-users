import React, { Component } from 'react';

class App extends React.Component {
  state = {
    data: null
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
                <img src={user.picture.thumbnail} />
              </div>
              <div>
                {user.name.first} {user.name.last}
              </div>
              <div>
                <a href="mailto: {user.email}">{user.email}</a>
              </div>
            </div>
          ))}
      </div>
    );
  }
}
export default App;