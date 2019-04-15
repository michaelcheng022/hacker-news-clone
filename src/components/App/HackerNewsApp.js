import React, { Component } from 'react';
import Header from '../Header';
import NewsFeed from '../NewsFeed';
import '../../styles/styles.scss'

class HackerNewsApp extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <NewsFeed />
      </div>
    );
  }
}

export default HackerNewsApp;
