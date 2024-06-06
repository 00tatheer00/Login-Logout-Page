import React from 'react';
function LoggedIn(props) {
  return (
    <div className="logged-in">
      <h2>Welcome, you are logged in!</h2>
      <button onClick={props.onLogout}>Logout</button>
    </div>
  );
}

export default LoggedIn;