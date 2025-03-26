import React, { useState } from "react";
import "./Login.css";
import { UserCred } from "./Usernames.js";
import { set, useForm } from "react-hook-form";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


function Login({ setUserLogined }) {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Eye, setEye] = useState(true);
  const navigate = useNavigate();
  function handleSignup() {
    navigate("/Signup");
  }
  function handleLogin() {
    if (UserName === UserCred.Name && Password === UserCred.password) {
      localStorage.setItem("userLogined", "true");
      setUserLogined(true);
      navigate("/Product");
    }
  }
  
  function eyeHover(){
    setEye(!Eye);
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Submitting the Form...", data);
    reset();
  }
  return (
    <>
      <div id="Loginpage">
        <div id="Login">
          <div id="Login-Left">
          <div id="Login-Left-Upper">
          <i onMouseEnter={eyeHover} onMouseOut={eyeHover} className={Eye?"ri-eye-close-fill":"ri-eye-line"}></i>
              </div>
              <div id="Login-Left-Lower">
              <h1>The <span>Trend</span> is Waiting for you</h1>
              <p>*Login and awail the best eyewear at the best discount</p>
              </div>
          </div>
          <div id="Login-Right">
            <h1>Login</h1>
            <h4> Welcome , Please Login to your account</h4>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div id="Login1">
              <input
                {...register("UserName", {
                  required: "*UserName Required ",
                })}
                pattern="[A-Za-z ]{3,30}"
                type="text"
                placeholder="UserName"
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                title="Should only contains Letter(A-Z,a-Z) and Spaces"
              />
              {errors.UserName && (
                <p
                >
                  {errors.UserName.message}
                </p>
              )}
              </div>
              <div id="Login2">
              <input
                {...register("PassWord", {
                  required: "*Password Required ",
                })}
                type="password"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                title="Should only contains Letter(A-Z,a-Z) and Spaces"
              />
              {errors.PassWord && (
                <p>
                  {errors.PassWord.message}
                </p>
              )}
              </div>

              <button onClick={handleLogin}>Submit</button>
              <button onClick={handleSignup}>Sign up</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
