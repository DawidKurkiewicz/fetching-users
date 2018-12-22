import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'
import Navbar from './Menu'
import Statement from './Statement'
import Users from './Users'
import About from './About'
import BadUrl from './BadUrl'

const style = {
  links: {
    textDecoration: 'none'
  },
  button: {
    position: 'fixed',
    right: 20,
    bottom: 10
  }
}

class App extends React.Component {
  state = {
    isStatementOpen: false,
    statementMessage: ''
  }

  toggleStatement = (message) => this.setState({
    isStatementOpen: !this.state.isStatementOpen,
    statementMessage: message || ''
  })

  render() {
    return (
      <div>
        <RouterTK
          toggleStatement={this.toggleStatement}
        />
        <Statement
          isStatementOpen={this.state.isStatementOpen}
          handleRequestClose={this.toggleStatement}
          statementMessage={this.state.statementMessage}
        />
      </div>
    )
  }
}

class RouterTK extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <Link
              to='/users'
              style={style.links}
            >
              <MenuItem>
                Users
          </MenuItem>
            </Link>
            <Link
              to='/about'
              style={style.links}>
              <MenuItem>
                About
          </MenuItem>
            </Link>
          </Navbar>
          <div>
          <Switch>

            <Route path="/" exact={true} component={Users}></Route>
            <Route path='/users' component={Users}></Route>
            <Route path='/about' component={About}></Route>
            <Route component={BadUrl} />
</Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
