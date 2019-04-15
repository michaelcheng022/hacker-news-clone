import React from 'react'

 const Item = (props) => {
  return (
    <div className="item-container">
      <div className="item">
        <h2 className="item-title">{props.data.title}</h2>
        <ul>
          <li>
            <a href="#">
              <span>{props.data.points} points</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>{props.data.author}</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>{props.data.num_comments}</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>{props.data.url}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  )
}
export default Item;