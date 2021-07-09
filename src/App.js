import React, { useState } from 'react';
import Login from './components/Login';
import Items from './components/Items';
import Cart from './components/Cart';

const items = [
  { name: 'shampoo' },
  { name: 'soap' },
  { name: 'biscuits' },
  { name: 'pizza' }
]

function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ username, setUsername ] = useState('');
  const [ cart, setCart ] = useState([]);

  const login = ( name ) => {
    setUsername(name);
    setLoggedIn(true);
  }

  const addItem = item => {
    setCart([...cart, item]);
  }

  return (
    <div className="App">
      <h1>Shopping Cart</h1>

      { loggedIn ? null : <Login login={ login } />}
      { loggedIn ? <Cart username={ username } cart={ cart } /> : null }
      <Items items={ items } loggedIn={ loggedIn } addItem={ addItem } />
    </div>
  );
}

export default App;
