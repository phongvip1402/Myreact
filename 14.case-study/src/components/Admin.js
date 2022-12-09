import axios from 'axios'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
    const [todoList, setTodoList] = useState([]);
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "",role: ""})
    const formSchema = Yup.object().shape({
        firstName: Yup.string().max(50).required(),
        lastName: Yup.string().required(),
        email: Yup.string().min(8).max(10).required(),
        role: Yup.string().min(8).max(10).required()
    })
    const [mode, setMode] = useState({ type: "add", action: "Submit" });

    useEffect(() => {
        axios.get('http://localhost:3001/user')
            .then(res => {
                setTodoList(res.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleEdit = (index) => {
        setMode({ type: "edit", action: "Save", selectedIndex: index });
        setForm({ ...todoList[index] });
    }

    const handleDelete = (index) => {
        let confirmation = window.confirm("Are you sure to delete this?");
        if (confirmation) {
            axios.delete(`http://localhost:3001/user/${todoList[index].id}`)
                .then(res => {
                    console.log(res);
                    let afterDeletedArray = todoList.filter(todo => todo.id != todoList[index].id);
                    console.log(afterDeletedArray);
                    setTodoList([...afterDeletedArray]);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    return (
        <div className="container pt-3">
            <h2>User</h2>
            <Formik
                initialValues={form}
                enableReinitialize={true}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    if (mode.type === "edit") {
                        let id = todoList[mode.selectedIndex].id;
                        axios.put(`http://localhost:3001/user/${id}`, values)
                            .then(res => {
                                setForm({ firstName: "", lastName: "", email: "",role:"" });
                                setMode({ type: "add", action: "Submit" });
                                let updatedArr = todoList;
                                updatedArr[mode.selectedIndex] = values;
                                setTodoList([...updatedArr]);
                            })
                            .catch(err => {
                                console.log(err);
                            })

                    } else {
                        axios.post('http://localhost:3001/user', {
                            firstName: values.firstName,
                            lastName: values.lastName,
                            email: values.email,
                            role: values.role
                        })
                            .then(res => {
                                setForm({ taskname: "", lastName: "", email: "",role:"" });
                                let addedArr = todoList;
                                values.id = res.data.id;
                                addedArr.push(values);
                                setTodoList([...addedArr]);
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    }
                }}
            >
                <Form>
                    <p className='mb-2'>First Name</p>
                    <Field name="firstName" placeholder="Enter a task first name" value={form.firstName || ""} onChange={handleChange}></Field>
                    <ErrorMessage component="div" name='firstName' className='text-danger'></ErrorMessage>
                    <p className='mb-2'>Last Name</p>
                    <Field name="lastName" placeholder="Enter a task last name" value={form.lastName || ""} onChange={handleChange}></Field>
                    <ErrorMessage component="div" name='lastName' className='text-danger'></ErrorMessage>
                    <p className='mb-2'>Email</p>
                    <Field name="email" type="email" value={form.email || ""} placeholder="Enter a task email" onChange={handleChange}></Field>
                    <ErrorMessage component="div" name='email' className='text-danger'></ErrorMessage>
                    <p className='mb-2'>Role</p>
                    <Field name="role" placeholder="Enter a role" value={form.role || ""} onChange={handleChange}></Field>
                    <ErrorMessage component="div" name='role' className='text-danger'></ErrorMessage>
                    <button type='submit' className='d-block mt-2 btn btn-success'>{mode.action}</button>
                </Form>
            </Formik>
            <hr />
            <table className='table table-hover table-striped table-responsive'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th className='text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.map((row, index) => (
                            <tr key={index}>
                                <td className='w-auto'>{row.id}</td>
                                <td className='w-auto'>{row.firstName}</td>
                                <td className='text-wrap w-50 text-justify'>{row.lastName}</td>
                                <td className='w-auto'>{row.email}</td>
                                <td className='w-auto'>{row.role}</td>
                                <td className='w-auto text-center'>
                                    <button className='btn btn-warning m-2' onClick={() => handleEdit(index)}>Edit</button>
                                    <button className='btn btn-danger m-2' onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Admin
