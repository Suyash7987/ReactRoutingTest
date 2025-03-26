import React, { useState } from "react";
import "./Login.css";
import { UserCred } from "./Usernames.js";
import { useForm } from "react-hook-form";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Login({ setUserLogined }) {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Eye, setEye] = useState(true);
  const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup views
  const navigate = useNavigate();

  function handleSignup() {
    setIsSignup(true); // Switch to signup view
  }

  function handleLogin() {
    if (UserName === UserCred.Name && Password === UserCred.password) {
      localStorage.setItem("userLogined", "true");
      setUserLogined(true);
      navigate("/Profile");
    }else if(UserName ==="" || Password ===""){
       alert("Please Enter Email or Password")
    
  } else{
     alert("Invalid Email or Password")
  }
  }

  function handleSubmitSignup() {
    // Handle the signup logic here
    // For example, validate and save user credentials
    console.log("Signup successful", { UserName, Password });
    setIsSignup(false); // Go back to login after successful signup
    navigate("/Login"); // Redirect to the Login page after signup
  }
  function eyeHover() {
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
    
    
    UserCred.Name = data.UserName;
    UserCred.password = data.PassWord;
    
    console.log("User Credentials Updated: ", UserCred);

    reset(); 
  }

  return (
    <>
      <div id="Loginpage">
        <div id="Login">
          <div id="Login-Left">
            <div id="Login-Left-Upper">
              <i
                onMouseEnter={eyeHover}
                onMouseOut={eyeHover}
                className={Eye ? "ri-eye-close-fill" : "ri-eye-line"}
              ></i>
            </div>
            <div id="Login-Left-Lower">
              <h1>
                The <span>Trend</span> is Waiting for you
              </h1>
              <p>
                *Login and avail the best eyewear at the best discount
              </p>
            </div>
          </div>
          <div id="Login-Right">
            <h1>{isSignup ? "Sign Up" : "Login"}</h1>
            <h4>{isSignup ? "Create a new account" : "Please Login to your account"}</h4>

            <form onSubmit={handleSubmit(isSignup ? handleSubmitSignup : onSubmit)}>
              <div id="Login1">
                <input
                  {...register("UserName", {
                    required: "*Email Required ",
                  })}
                  type="email"
                  placeholder="Email"
                  value={UserName}
                  onChange={(e) => setUserName(e.target.value)}
                  title="Should only contain Letter(A-Z,a-Z) and Spaces"
                />
                {errors.UserName && <p>{errors.UserName.message}</p>}
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
                  title="Should only contain Letter(A-Z,a-Z) and Spaces"
                />
                {errors.PassWord && <p>{errors.PassWord.message}</p>}
              </div>

              {isSignup && (
                <div id="ConfirmPassword">
                  <input
                    {...register("ConfirmPassword", {
                      required: "*Confirm Password Required ",
                    })}
                    type={Eye ? "password" : "text"}
                    placeholder="Confirm Password"
                    title="Please confirm your password"
                  />
                  {errors.ConfirmPassword && <p>{errors.ConfirmPassword.message}</p>}
                </div>
              )}

              <button onClick={handleLogin} >
                {isSignup ? "Sign Up" : "Login"}
              </button>
              <br />
              <a onClick={isSignup ? () => setIsSignup(false) : handleSignup}>
                {isSignup ? "Already have an account? " : "Don't have an account? "}
                <span style={{ color: '#2795F6' }}>{isSignup ? "Login" : "Sign up"}</span>
              </a>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
