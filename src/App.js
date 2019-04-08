import React, { Component } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NewsList />
      </div>
    );
  }
}

export default App;
