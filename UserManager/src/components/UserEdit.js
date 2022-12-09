import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as Yup from 'yup';


const UserEdit = () => {
    const { state } = useLocation();
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const formSchema = Yup.object().shape({
        name: Yup.string().max(100).required(),
        birthday: Yup.string().min(8).max(10)
    })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/users/${state.id}`)
            .then((response) => {
                setForm(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [state])

    
    return (
        <div className='container pt-3'>
            <Formik
                initialValues={form}
                enableReinitialize={true}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    axios.put(`http://localhost:3001/users/${form.id}`, values)
                        .then((res) => {
                            navigate('/user')
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                }}
            >
                <Form>
                    <p>Name</p>
                    <Field name="name" placeholder="Enter a name" value={form.name || ""} onChange={handleChange}></Field>
                    <ErrorMessage component="div" name='name' className='text-danger'></ErrorMessage>
                    <br />
                    <p>Birthday</p>
                    <Field name="birthday" type="date" value={form.birthday || ""} onChange={handleChange}></Field>
                    <ErrorMessage component="div" name='birthday' className='text-danger'></ErrorMessage>
                    <br />
                    <br />
                    <button type='submit' className='btn btn-success'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default UserEdit