import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from "./UserDetails";
import Users from "./Users";


export default function RouterEdit() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path={"/user/add"} element={<UserDetails />} />
        <Route path={`/user/:userId`} element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
