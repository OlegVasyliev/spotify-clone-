import React from 'react';
import './Login.css';
import {accessUrl} from "../spotify/spotify";


function Login() {
  return (
      <div className="login">
          <h1>LOGIN PAGE</h1>
        <img src="https://i2.wp.com/www.wayoutwestie.com/wp-content/uploads/2019/04/spotify-button.png?fit=1000%2C500&ssl=1"
             alt=""/>
        <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
      </div>
  );
};


export default Login;