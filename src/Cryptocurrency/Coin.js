import React from 'react'

export default function Coin(props) {
  return (
    <div className="card my-3" style={{width: "18rem"}}>
      <div className='text-center'>
      <img src={props.image} className="img-fluid"  style={{width: "10rem"}}alt="..." />
      </div>
      <div className="card-header">
        {props.name}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price : {props.price}</li>

      </ul>
    </div>
  )
}
