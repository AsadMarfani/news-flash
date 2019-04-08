import React, { Component } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList'
import {BackTop} from 'antd';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewsList />
        <BackTop />
      </div>
    );
  }
}

export default App;
