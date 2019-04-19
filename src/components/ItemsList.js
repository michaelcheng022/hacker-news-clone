import React, { Component } from 'react'
import Item from './Item'
import { connect } from 'react-redux';
import { fetchData } from '../store/app/actions';
class ItemsList extends Component {
  // getData = (url) => {
  //   fetch(url)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({
  //         hits: [...this.state.hits, ...data.hits]
  //       });
  //     });
  // }
  componentDidMount() {
    //this.getData('https://hn.algolia.com/api/v1/search?query=&page=0&tags=story');
    this.props.dispatch(fetchData());
  }

  render() {
    return (
      <div>
        {this.props.hits !== undefined ? this.props.hits.map((hit) => {
          return <Item key={hit.objectID} data={hit} />;
        }) : null}
        <div className="page-number-container">
          <div>1</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hits: state.app.hits
  };
};
export default connect(mapStateToProps)(ItemsList);
