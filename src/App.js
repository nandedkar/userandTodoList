import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'
import './bootstrap.css';
import './App.scss'


import Header from './common/Header';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    )
  }
}

export default App
