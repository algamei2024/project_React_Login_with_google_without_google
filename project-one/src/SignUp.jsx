import React, { useContext, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './component/Header';
import { User } from './context/Context';
export default function SignUp() {
    const aus = useContext(User);
    console.log(aus);
    const [name, setName] = useState('m');
    const [email, setEmail] = useState('l@gmail.com');
    const [password, setPassword] = useState('jjjjjjjj');
    const [passwordC, setPasswordC] = useState('jjjjjjjj');
    const [accept, setAccept] = useState(false);
    const [emailErr, setEmailErr] = useState('');
    const Submit = async (e) => {
        e.preventDefault();
        setAccept(true);
        if (!(name == '' || password.length < 8 || password !== passwordC)) {
            try {
                let res = await axios.post('http://127.0.0.1:8000/api/register', {
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: passwordC
                });
                if (res.status == 200) {
                    localStorage.setItem('email', email);
                    window.location.pathname = '/';
                }
            } catch (ex) { setEmailErr(ex.response.status) }
        }
    }
    return (
        <>
            <Header/>
            <div className='signUp'>
                <div className="form-container">
                    <p className="title">
                        Create account
                    </p>
                    <p className="sub-title">
                        welcome to my website
                    </p>
                    <form className="form" onSubmit={Submit}>
                        <input
                            className="input"
                            placeholder="Name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {name == '' && accept && <p className="error">Username is require</p>}
                        <input
                            className="input"
                            placeholder="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {accept && emailErr == 422 && <p>Email is Already been token</p>}
                        <input
                            className="input"
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {password.length < 8 && accept && <p className="error">password must be more 8 char</p>}
                        <input
                            className="input"
                            placeholder="Confirm Password"
                            type="password"
                            value={passwordC}
                            onChange={(e) => setPasswordC(e.target.value)}
                        />
                        {password !== passwordC && accept && <p className="error">password dos not match</p>}
                        <button className="form-btn">
                            Create account
                        </button>
                    </form>
                    <p className="sign-up-label">
                        Already have an account?
                        <Link to="/login" className="sign-up-link">
                            Log in
                        </Link>
                    </p>
                    <div className="buttons-container">
                        <div className="apple-login-button">
                            <svg
                                className="apple-icon"
                                fill="currentColor"
                                height="1em"
                                stroke="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" />
                            </svg>
                            <span>
                                Sign up with Apple
                            </span>
                        </div>
                    <a href="http://127.0.0.1:8000/login-google">
                        <div className="google-login-button">
                                <svg
                                    className="google-icon"
                                    fill="currentColor"
                                    height="1em"
                                    stroke="currentColor"
                                    strokeWidth="0"
                                    version="1.1"
                                    viewBox="0 0 48 48"
                                    width="1em"
                                    x="0px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    y="0px"
                                >
                                    <path
                                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                        fill="#FFC107"
                                    />
                                    <path
                                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                        fill="#FF3D00"
                                    />
                                    <path
                                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                        fill="#4CAF50"
                                    />
                                    <path
                                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                        fill="#1976D2"
                                    />
                                </svg>
                            <span>
                                Sign up with Google
                            </span>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
        </>
    )
}
