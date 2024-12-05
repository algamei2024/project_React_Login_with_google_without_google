import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function UpdateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordC, setPasswordC] = useState('');
  let id = window.location.pathname.split('/').slice(-1);
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/user/showbyid/${id}`).then((res) => {
      setName(res.data[0].name);
      setEmail(res.data[0].email);
     });
  },[0])
  async function Submit(e) {
    e.preventDefault();
   if (name.length > 3 && email.length > 9 && password.length >= 8 && password == passwordC) {
     try {
       console.log('first')
       let res = await axios.post(`http://127.0.0.1:8000/api/user/update/${id}`, {
         name: name,
         email: email,
         password: password,
         password_confirmation:passwordC
       });
       console.log(res.status)
       if (res.status === 200) {
         window.location.pathname = '/dashboard/users';
       }
     } catch (ex) { console.log(ex)}
    }
  }
  return (
    <>
      <div className='signUp'>
        <div className="form-container">
          <p className="title">
            Update account
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
              onChange={(e)=>setName(e.target.value)}
            />
            <input
              className="input"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input
              className="input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <input
              className="input"
              placeholder="Password"
              type="password"
              value={passwordC}
              onChange={(e)=>setPasswordC(e.target.value)}
            />
             <button className="form-btn">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
