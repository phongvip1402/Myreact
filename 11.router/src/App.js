import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from './Demo/Main'
import Category from "./components/Category";
import Product from './components/Product';

export default function App() {

  return (
    <div>
      <BrowserRouter>
        {/*<Main />*/}
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/product/:categoryId" element={<Product />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}