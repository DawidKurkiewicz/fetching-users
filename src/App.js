import React from 'react';
import Users from './Users'
import { BrowserRouter, Route} from 'react-router-dom'
import Menu from './Menu'
import About from './About'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Route component={Menu} />

          <Route path='/' exact component={Users} />
          <Route path='/users' exact component={Users} />
          <Route path='/about' component={About} />

        </div>
      </BrowserRouter>
    );
  }
}
export default App;
