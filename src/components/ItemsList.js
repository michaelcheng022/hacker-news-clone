import React, { Component } from 'react'
import Item from './Item'
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { fetchData } from '../store/app/actions';

//const url = `https://hn.algolia.com/api/v1/search${searchBy}?query=${query}&page=0&tags=story`

class ItemsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchData(this.props.url));
    console.log(this.props.url);
  }
  handlePageClick = (e) => {
    console.log(e.selected);
    const url = this.props.url.replace(`page=${this.props.page}`, `page=${e.selected}`);
    this.props.dispatch(fetchData(url));
  }
  // handleSortClick = (e) => {
  //   if(e.classList.contains('active'))
  // }
  render() {
    return (
      <div>
        <div className="sort-by">
          <span>Search stories by </span>
          <button 
            id="byPopularity"
            className="sort-button active" 
            onClick={(e)=> {
              e.target.classList.add('active');
              document.getElementById('byDate').classList.remove('active');
              return this.props.dispatch(fetchData(this.props.url.replace('search_by_date', 'search')))
            }}>
              popularity
          </button>
          <button 
            id="byDate"
            className="sort-button" 
            onClick={(e)=> {
              e.target.classList.add('active');
              document.getElementById('byPopularity').classList.remove('active');
              return this.props.dispatch(fetchData(this.props.url.replace('search', 'search_by_date')))
            }}>
              newest
          </button>
        </div>
        <div>
          {this.props.hits !== undefined ? this.props.hits.map((hit) => {
            return <Item key={hit.objectID} data={hit} />;
          }) : null}
        </div>
        <div className="page-number-container">
          <ReactPaginate 
            pageCount={this.props.nbPages}
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
            initialPage={this.props.page}
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            activeClassName={'page-active'}
            onPageChange={this.handlePageClick}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    url: state.app.url,
    hits: state.app.hits,
    page: state.app.page,
    nbPages: state.app.nbPages
  };
};
export default connect(mapStateToProps)(ItemsList);
