import React, { Component } from 'react'
import Item from './Item'
import { connect } from 'react-redux';
import { fetchData, fetchFrom } from '../store/app/actions';

const url = 'https://hn.algolia.com/api/v1/search?query=&page=0&tags=story'

class ItemsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData(this.props.url));
  }
  render() {
    return (
      <div>
        <div className="sort-by">
          <span>Search stories by </span>
          <button 
            className="sort-button" 
            onClick={()=> (
              this.props.dispatch(fetchData(this.props.url.replace('search_by_date', 'search')))
            )}>
              popularity
          </button>
          <button 
            className="sort-button" 
            onClick={()=> (
              this.props.dispatch(fetchData(this.props.url.replace('search', 'search_by_date')))
            )}>
              newest
          </button>
        </div>
        <div>
          {this.props.hits !== undefined ? this.props.hits.map((hit) => {
            return <Item key={hit.objectID} data={hit} />;
          }) : null}
        </div>
        <div className="page-number-container">
          <div>1</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.app.url,
    hits: state.app.hits
  };
};
export default connect(mapStateToProps)(ItemsList);
