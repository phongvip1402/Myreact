import axios from 'axios'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup';

const UserCreate = () => {
    const [form, setForm] = useState({ name: "", birthday: "" })
    const formSchema = Yup.object().shape({
        name: Yup.string().max(100).required(),
        birthday: Yup.string().min(8).max(10)
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className='container pt-3'>
            <Formik
                initialValues={form}
                enableReinitialize={true}
                validationSchema={formSchema}
                onSubmit={(values) => {
                    axios.post("http://localhost:3001/users", values)
                        .then((res) => {
                            navigate('/user')
                            console.log(res);
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

export default UserCreate