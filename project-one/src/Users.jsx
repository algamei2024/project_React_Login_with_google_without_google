import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Users() {
    const [users, setUsers] = useState([]);
    const [run, setRun] = useState(true);
    useEffect(() => {
        console.log('one')
        try {
            axios.get('http://127.0.0.1:8000/api/user/show').then((res) => {setUsers(res.data)}).catch(ex=>ex);
        }catch(Ex){}
    }, [run]);
    async function deleteUser(id) {
        try {
            let res = await axios.delete(`http://127.0.0.1:8000/api/user/delete/${id}`);
            if (res.status === 200)
                setRun(prev => !prev);
        } catch (ex) {

        }
    }
    const showUsers = users.map((user, i) =>
        <tr key={i}>
            <td>{i + 1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                <Link to={`${user.id}`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <i className="fa-solid fa-trash" onClick={() => deleteUser(user.id)}></i>
            </td>
        </tr>);
    return (
        <div className='table-users'>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showUsers}
                </tbody>
            </table>
        </div>
    )
}
