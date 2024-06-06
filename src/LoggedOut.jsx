// src/LoggedOut.jsx
import React from 'react';

function LoggedOut({ onLogin }) {
  return (
    <div>
      <h1>You are logged out!</h1>
      <form>
        <label>Username:</label>
        <input type="text" />
        <br />
        <label>Password:</label>
        <input type="password" />
        <br />
        <label className='CP'>Confirm Password:</label>
        <input type="password" />
        <br />
        <button onClick={onLogin}>Login</button>
      </form>
    </div>
  );
}

export default LoggedOut;