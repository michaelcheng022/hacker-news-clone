import React, { Component } from 'react'
import Item from './Item'

export default class ItemsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: []
    };
  }

  getData = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          hits: [...this.state.hits, ...data.hits]
        });
      });
  }
  componentDidMount() {
    this.getData('https://hn.algolia.com/api/v1/search?query=&page=0&tags=story');
  }

  render() {
    return (
      <div>
        {this.state.hits.length > 0 ? this.state.hits.map((hit) => {
          return <Item key={hit.objectID} data={hit} />;
        }) : null}
        <div className="page-number-container">
          <div>1</div>
        </div>
      </div>
    )
  }
}
