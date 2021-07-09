import React from 'react'

import Item from './Item';

const Items = (props) => {
  const items = props.items.map((item, index) => <Item key={index} addItem={ props.addItem } item={item} loggedIn={ props.loggedIn } />)
  return (
    <div>
      <h3>Items</h3>
      { items }
    </div>
  )
}

export default Items
