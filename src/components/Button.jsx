import React from 'react'

export default function Button(props) {
  return (
    <button className="btn btn-dark mx-2 my-2" onClick={props.onClick}>{props.text}</button>
  )
}
