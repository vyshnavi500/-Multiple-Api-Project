import React from 'react'

export default function Card(props) {
  return (
    <div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.loc}</li>
        <li className="list-group-item">Total Confirmed cases : {props.totalConfirmed}</li>
        <li  className="list-group-item">Total Deaths : {props.deaths}</li>
        <li className="list-group-item">Discharged : {props.discharged}</li>
      </ul>
    </div>  
  )
}
