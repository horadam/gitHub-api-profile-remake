import React, { Component} from 'react';
import '../styles/base.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router } from 'react-router-dom'
import NavHeader from './NavHeader'
import "font-awesome/css/font-awesome.css"
import UserProfile from './UserProfile'
import Main from './Main'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <NavHeader/>
          <div id="container">
            <UserProfile />
            <Main />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
