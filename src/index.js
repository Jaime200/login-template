import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Login.css'
import user from './assets/no-user.png'
ReactDOM.render(
    <div className="login">
    <div className="login__container">
        <img className="login__container--logo" src={user} alt="imagen"/>
        <form className="login__container--form">
            <label for="login">Login</label>
            <input className="input" type="text" placeholder="jmunoz200"/>
            <label for="password">Password</label>
            <input className="input" type="password" placeholder="*******"/>
            <button className="btn primary">Login</button>
        </form>
        <button className="btn secondary ">Forgot my password</button>
    </div>
</div>
    , document.getElementById('app'));