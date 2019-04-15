import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="flex-row">
          <div className="title-container">
            <h1>HN</h1>
          </div>  
          <div className="searchbar-container">
            <input type="text" placeholder="Search stories by title, url, or author"></input>
          </div>
          <div className="subtitle-container">
            <h4>powered by algolia</h4>
          </div>
        </div>
      </div>
    )
  }
}
