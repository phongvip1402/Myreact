import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fakeLogin } from "../redux/action";
import "../style/login.css";
import { MDBContainer } from "mdb-react-ui-kit";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

function Login() {
  const navigate = useNavigate(); // khai báo navigate
  const dispatch = useDispatch(); // khai báo dispatch
  const [user, setUser] = useState({ email: "", password: "" });
  const userlogined = useSelector((state) => state.userlogined); //  lấy giá trị state (userlogined)
  const setValueForUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const validate = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).required("Required"),
  });

  const login = () => {
    dispatch(fakeLogin(user));
  };

  useEffect(() => {
    if (userlogined.email) {
      navigate("/admin");
    }
  }, [userlogined, navigate]);

  return (
    <Formik
      initialValues={user}
      validationSchema={validate}
      enableReinitialize={true}
      onSubmit={login}
    >
      <Form>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
          <h1 className="text-center mb-5">Login</h1>
          <Field
            className="input-control"
            name="email"
            placeholder="Enter a email"
            value={user.email || ""}
            onChange={setValueForUser}
          />
          <ErrorMessage component="div" className="text-danger" name="email" />
          <br />

          <Field
            className="input-control"
            name="password"
            placeholder="Enter a title"
            value={user.password || ""}
            type="password"
            onChange={setValueForUser}
          />
          <ErrorMessage component="div" className="text-danger" name="password" />
          <br />

          <button
            className="mb-4 text-center btn btn-primary"
            onClick={login}
            type="submit"
          >
            Sign in
          </button>

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
