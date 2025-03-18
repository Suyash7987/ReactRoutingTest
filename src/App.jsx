import React, { useState } from "react";
import Footer from "./components/Footer";
import "./App.css";
import MyNav from"./components/MyNav";
import { Outlet } from "react-router-dom";


const App = () => {
  const [userLogined, setUserLogined] = useState(
    localStorage.getItem("userLogined") === "true"
  );
  return (
  
      <div>
        <MyNav  userLogined={userLogined} setUserLogined={setUserLogined}/>
        <Outlet />
      </div>
  
  );
};

export default App;