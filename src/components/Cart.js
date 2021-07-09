import React from 'react'

const Cart = (props) => {
  const items = props.cart.map( (item, key) => <li key={key}>{ item }</li>)
  return (
    <div>
      <h3>{props.username}'s Cart</h3>
      <ul>{ items }</ul>
    </div>
  )
}

export default Cart
