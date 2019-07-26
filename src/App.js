import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
import Navbar from './Navigation/Menu';
import Users from './Components/Users';
import About from './Components/About';
import BadUrl from './Components/BadUrl';

const style = {
  links: {
    textDecoration: 'none'
  }
};

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
              <Route path='/:id([1-4])' component={Users} />
              <Route path='/about' component={About}></Route>
              <Route component={BadUrl} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  };
};

export default App;
