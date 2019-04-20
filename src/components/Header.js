import React, { Component } from 'react'
import {connect } from 'react-redux';
import { fetchData } from '../store/app/actions';

class Header extends Component {
  handleInputQuery = (e) => {
    const query = e.target.value;
    let url = this.props.url.replace(`query=${this.props.query}`, `query=${query}`);
    console.log(url);
    // url = encodeURIComponent(url.trim())
    this.props.dispatch(fetchData(url));
  }
  render() {
    return (
      <div className="header-container">
        <div className="header">
          <div className="flex-row">
            <div className="title-container">
              <h1>HN</h1>
            </div>  
            <div className="searchbar-container">
              <input 
                type="text" 
                placeholder="Search stories by title, url, or author" 
                onChange={this.handleInputQuery}
              />
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

const mapStateToProps = (state) => {
  return {
    url: state.app.url,
    query: state.app.query
  };
};
export default connect(mapStateToProps)(Header);
