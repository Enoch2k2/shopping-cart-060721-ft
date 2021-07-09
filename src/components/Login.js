import React, { useState } from 'react'

const Login = (props) => {
  const [ username, setUsername ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    props.login( username );
  }

  return (
    <>
      <h3>Login</h3>
      <form onSubmit={ handleSubmit }>
        <label>Username: </label>
        <input type='text' value={ username } onChange={ e => setUsername(e.target.value) }></input>

        <input type='submit' value="login" />
      </form>
    </>
  )
}

export default Login
