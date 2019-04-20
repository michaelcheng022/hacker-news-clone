import React from 'react'
import moment from 'moment';

const regEx = /:\/\/(.[^\/]+)/; //regular expression for parsing urls

//const regEx = /(http(s)?:\/\/)|(\/.*){1}/;
const getDate = (createdAt) => {
  let date = new Date(createdAt);
  return moment(date).fromNow();
}

const getUrl = (url) => {
  const matchUrl = url.match(regEx);
  return matchUrl && matchUrl.length > 1 ? matchUrl[1] : url;
}
const Item = (props) => {
  return (
    <div className="item-container">
      <div className="item">
        <h2 className="item-title"><a href={props.data.url}>{props.data.title}</a></h2>
        <ul className="item-details">
          <li>
            <a href={`https://news.ycombinator.com/item?id=${props.data.objectID}`}>
              <span>{props.data.points} points</span>
            </a>
          </li>
          <li>
            <a href={`https://news.ycombinator.com/user?id=${props.data.author}`}>
              <span>{props.data.author}</span>
            </a>
          </li>
           <li>
            <a href={`https://news.ycombinator.com/item?id=${props.data.objectID}`}>
              <span>{getDate(props.data.created_at)}</span>
            </a>
          </li>
          <li>
            <a href={`https://news.ycombinator.com/item?id=${props.data.objectID}`}>
              <span>{props.data.num_comments} comments</span>
            </a>
          </li>
          {props.data.url ? <li>
            <a href={props.data.url}>
              {console.log('hi')}
              <span>{getUrl(props.data.url)}</span>
            </a>
          </li> : null}
        </ul>
      </div>
    </div>
    
  )
}
export default Item;