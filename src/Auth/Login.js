import { useState } from "react";
import { validateEmail } from "../Utils/utils.js";

function Login() {
    // eslint-disable-next-line
    var [email, setEmail] = useState(""); // eslint-disable-next-line
    var [pword, setPword] = useState("");

    var [emailError, setEmailError] = useState("");
    var [pwordError, setPwordError] = useState("");


    function handleEmail(emailData){
        setEmail = emailData.target.value;
    }

    function handlePassword(passwordData){
        setPword = passwordData.target.value;
    }

    function handleLogin(){
        if(validateEmail(email)){
            setEmailError("");
        }else{
            setEmailError("Email is invalid");
        }
        if(pword.length>=8){
            setPwordError("");
        }else{
            setPwordError("Password requires minimum 8 characters");
        }
    }




    return (
        <div className="container">
            <h3 className="text-success text-center mt-3">Login Page</h3>
            <form className="m-2 p-3">
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" onChange={emailData => handleEmail(emailData)} placeholder="Email"></input>
                    <div className="text-danger">{emailError}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={passwordData => handlePassword(passwordData)} placeholder="Password"></input>
                    <div className="text-danger">{pwordError}</div>
                </div>
                <div className="mb-3">
                    <button className="btn btn-danger" onClick={loginData => handleLogin(loginData)}>Login</button>
                </div>
                <div className="mb-3">
                    <a href='/forgot-password'>Forgot Password</a>
                </div>
                <div className="mb-3">
                    <a href='/signup'>SignUp</a>
                </div>
                <div className="mb-3">
                    <a href='/'>Home</a>
                </div>
            </form>
        </div>
    );
}

export default Login;
