import React from 'react'

const Item = (props) => {
  return (
    <div>
      <p>{props.item.name}{ props.loggedIn ? <> - <button onClick={ () => props.addItem( props.item.name )}>Add To Cart</button></> : null}</p>
    </div>
  )
}

export default Item
