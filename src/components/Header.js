import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="flex-row">
            <div className="title-container">
              <h1>HN</h1>
            </div>  
            <div className="searchbar-container">
              <input type="text" placeholder="Search stories by title, url, or author"></input>
            </div>
            <div className="subtitle-container">
              <h4>using <a href="https://hn.algolia.com/api">Hacker-News Agolia API</a></h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
