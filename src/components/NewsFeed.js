import React, { Component } from 'react'
import ItemsList from './ItemsList';

export default class NewsFeed extends Component {
  render() {
    return (
      <div>
        <header>
          Filters go here
        </header>
        <ItemsList />
        <footer>
          page numbers go here
        </footer>
      </div>
    )
  }
}
