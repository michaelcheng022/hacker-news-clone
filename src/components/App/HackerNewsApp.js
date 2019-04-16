import React, { Component } from 'react';
import Header from '../Header';
import ItemsList from '../ItemsList';
import '../../styles/styles.scss'

class HackerNewsApp extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <ItemsList />
      </div>
    );
  }
}

export default HackerNewsApp;
