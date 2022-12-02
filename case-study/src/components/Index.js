import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Signup from './Signup';
import User from './User';
import Login from './Login';
import App from '../App';
import { Product } from './Product';

export default function Index() {
    return (
        <div>
            <BrowserRouter>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand to='/' >Home</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link ><Link to='/product'>Product</Link> </Nav.Link>
                                <Nav.Link ><Link to='/user'>User</Link> </Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link ><Link to='/logout'>Log out</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route path="/user" element={<User />}></Route>
                    <Route path="/logout" element={<Login />}></Route>
                    <Route path="/product" element={<Product />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
