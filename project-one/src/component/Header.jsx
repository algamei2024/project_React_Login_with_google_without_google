import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const handelLogout = () => {
    window.localStorage.removeItem('email');
    window.location.pathname = '/';
  }
  return (
    <div className='container'>
      <div>
          <h6>Home</h6>
          <h6>About</h6>
      </div>
      <div>
        {
          window.localStorage.getItem('email') ?
            <button onClick={handelLogout} className="logout">
               Logout
             </button>
            :
          <><Link to="/register" className='register'>register</Link>
          <Link to="/login" className='login'>Login</Link></>
            
        }
      </div> 
    </div>
  )
}
