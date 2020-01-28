import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router";
import "../styles/Login.scss";
import office from '../images/office.jpg';
import { Loader } from 'semantic-ui-react';
import { userAction } from '../state/actions/userAction';

export default function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const userReducer = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

    function login() {
        dispatch(userAction(dispatch, history, { email, password }));
    }

    return (
        <div className="login-container">
            {
                userReducer.loading
                    ? <div className="loading active"><Loader active size="medium" inverted /></div>
                    : null
            }
            <div className="background">
                <img src={office} />
            </div>
            <div className="login-box">
                <div className="logo">LOGO</div>
                <p className="title">Login to access your dashboard</p>
                <div className="fields">
                    {userReducer.error ? <div className="error" style={{marginBottom: '10px'}}>Kullanıcı adı veya şifreniz yanlış!</div> : null}
                    <div className="username"><input type="username" className="user-input" placeholder="Email" onChange={event => setEmail(event.target.value)} /></div>
                    <div className="password"><input type="password" className="pass-input" placeholder="Password" onChange={event => setPassword(event.target.value)} /></div>
                    <p className="forgot">Did you <span>forgot your password?</span></p>
                </div>
                <button className="signin-button" onClick={login}>CONTINUE</button>
            </div>
        </div>
    );
}