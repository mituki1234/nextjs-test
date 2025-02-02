"use client";

import './css/style.css'

export default function Home() {
    const handleClick = () => {
        alert("foobar");
    }
    return (
        <div className="container">
            <div className="topbar">
                <div className="logo">
                    <h2>美術</h2>
                </div>
                <div className="menu">
                    <a href="./"><span>MEMBER</span></a>
                    <a href="./"><span>NEWS</span></a>
                    <a href="./"><span>ABOUT</span></a>
                    <a href="./login"><span>ADMIN</span></a>
                </div>
            </div>
            <div className='login-form-container'>
                <div className="login-form">
                    <h2>ログイン</h2>
                    <p>ユーザー名</p>
                    <input type="text"></input>
                    <p>パスワード</p>
                    <input type="password"></input><div className='show-button'></div>
                    <button className='login-button' onClick={handleClick}><span>ログイン</span></button>
                </div>
            </div>
        </div>
    );
}