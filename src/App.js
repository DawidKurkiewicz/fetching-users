import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'
import Navbar from './Menu'
import Users from './Users'
import About from './About'
import BadUrl from './BadUrl'

const style = {
  links: {
    textDecoration: 'none'
  }
}

class App extends React.PureComponent {
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
