import "./App.css";
import { useState } from "react";
import Users from "./component/ListUser";
import NewUser from "./component/NewUsers";

export default function App() {

  return (
    <div className="App">
      <NewUser/>
    </div>
  );

}