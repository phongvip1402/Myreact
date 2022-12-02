import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const User = () => {
    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/user')
            .then((response) => {
                setUserList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])


    return (
        <div className='container pt-3'>
            <h2>Users List</h2>
            <button className='btn btn-success' >Add new user</button>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((user, index) => (
                            <tr key={index}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.user}</td>
                                <td>
                                    <button className='btn btn-warning mx-2' >Edit</button>
                                    <button className='btn btn-danger mx-2' >Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default User