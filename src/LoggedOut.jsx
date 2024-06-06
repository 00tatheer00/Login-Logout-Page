import React from 'react';

function LoggedOut(props) {
  return (
    <div className="logged-out">
      <h2>You are logged out.</h2>
      <button onClick={props.onLogin}>Login</button>
    </div>
  );
}

export default LoggedOut;