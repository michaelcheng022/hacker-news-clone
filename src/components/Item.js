import React from 'react'

const regEx = /:\/\/(.[^/]+)/; //regular expression for parsing urls

const getDate = (dateCreated) => {
  const today = Date.now();
  console.log((new Date(dateCreated)));
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
          <li>
            <a href={props.data.url}>
              <span>{props.data.url.match(regEx)[1]}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  )
}
export default Item;