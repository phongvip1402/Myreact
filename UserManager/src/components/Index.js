import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Index = () => {
    const [userList, setUserList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/users')
            .then((response) => {
                setUserList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const handleCreate = () => {
        navigate('/user/add');
    }

    const handleEdit = (userID) => {
        navigate('/user/edit', { state: { id: userID } });
    }

    const handleDelete = (userID) => {
        let confirmation = window.confirm("Are you sure to delete???")
        if (confirmation) {
            axios.delete('http://localhost:3001/users/' + userID)
                .then((res) => {
                    let userArr = userList.filter(user => user.id != userID)
                    console.log(userArr);
                    setUserList([...userArr])
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    return (
        <div className='container pt-3'>
            <h2>Users List</h2>
            <button className='btn btn-success' onClick={handleCreate}>Add new user</button>
            <table className='table table-hover table-striped'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Birthday</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.birthday}</td>
                                <td>
                                    <button className='btn btn-warning mx-2' onClick={() => handleEdit(user.id)}>Edit</button>
                                    <button className='btn btn-danger mx-2' onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Index