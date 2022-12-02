import React, { useEffect } from "react";
import "../style/login.css";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Signup from "./Signup";
import { useState } from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  const [form, setForm] = useState({});
  const[account,setAccount] = useState({})
  // const navigate = useNavigate();
  const validate = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).required("Required"),
  });
  const resetForm = () => {
    setForm({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    axios
    .get(`http://localhost:3000/user`)
    .then((response) => {
      console.log(response);
      setAccount(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  },[])

  let handleSubmit = (e) => {
    console.log('====================================');
    console.log(account);
    console.log('====================================');
   for(let i = 0; i < account.length; i++) {
    if (
      account[i].email === form.email &&
      account[i].password === form.password
    ) {
      // <Login/>
      // navigate("/user", {
      //   state: {
      //     email: response.data[i].email,
      //     password: response.data[i].password,
      //   },
      // });
      alert("submitted");
    } else {
      alert("fail");
      // resetForm();
  }
   }
  };

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <Formik
      initialValues={form}
      validationSchema={validate}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      <Form>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <h1 className="text-center mb-5">Login</h1>

          <Field
            className="input-control"
            name="email"
            placeholder="Enter a email"
            value={form.email || ""}
            onChange={handleChange}
          />
          <ErrorMessage component="div" className="text-danger" name="email" />
          <br />

          <Field
            className="input-control"
            name="title"
            placeholder="Enter a title"
            value={form.title || ""}
            type="password"
            onChange={handleChange}
          />
          <ErrorMessage component="div" className="text-danger" name="title" />
          <br />

          <buton
            className="mb-4 text-center btn btn-primary"
            onClick={handleSubmit}
            type="submit"
          >
            Sign in
          </buton>

          <div className="text-center">
            <p>
              Not a member? <a href="#">Register</a>
            </p>
          </div>
        </MDBContainer>
      </Form>
    </Formik>
  );
}

export default Login;
