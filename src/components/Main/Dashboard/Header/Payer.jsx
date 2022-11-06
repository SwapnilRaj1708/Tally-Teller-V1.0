import React from 'react'

export default function Payer(props) {
  return (
    // <li><a className="dropdown-item" href="#">{props.name}</a></li>
    <option value={props.id}>{props.name}</option>
  )
}
