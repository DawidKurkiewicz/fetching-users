import React from 'react';
import Users from './Users'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Menu from './Menu'
import About from './About'
import BadUrl from './BadUrl'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route component={Menu} />
          <Switch>

          <Route path='/' exact component={Users} />
          <Route path='/' exact component={Users} />
          <Route path='/users' exact component={Users} />
          <Route path='/about' component={About} />
          <Route component={BadUrl} />
          </Switch>


        </div>
      </BrowserRouter>
    );
  }
}
export default App;
