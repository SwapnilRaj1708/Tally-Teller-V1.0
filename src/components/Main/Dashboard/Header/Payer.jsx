import React from 'react'

export default function Payer(props) {
  return (
    <option value={props.id}>{props.name}</option>
  )
}
