import { useState } from "react";
import { validateEmail } from "../Utils/utils.js";
import axios from "axios";

function Login() {
    var [email, setEmail] = useState("");
    var [pword, setPword] = useState("");

    var [emailError, setEmailError] = useState("");
    var [pwordError, setPwordError] = useState("");

    var [apiErrormsg, setAPIErrorMsg] = useState("");
    var [apiSuccessMsg, setAPISuccessMsg] = useState("");

    function handleEmail(emailData) {
        setEmail(emailData.target.value);
    }

    function handlePassword(passwordData) {
        setPword(passwordData.target.value);
    }

    async function handleLogin() {
        var noOfErrors = 0;
        if (validateEmail(email)) {
            setEmailError("");
        } else {
            setEmailError("Email is not valid");
            noOfErrors++;
            console.log("Validating email:", email, validateEmail(email));
        }
        if (pword.length >= 3) {
            setPwordError("");
        } else {
            setPwordError("Password requires minimum 8 characters");
            noOfErrors++;
        }

        if (noOfErrors === 0) {
            try {
                const apiLoginData = {
                    email: email, password: pword
                }
                const apiLoginResponse = await axios.post('https://api.softwareschool.co/auth/login', apiLoginData);
                if (apiLoginResponse.data.result === "SUCCESS") {
                    console.log(apiLoginResponse);
                    setAPISuccessMsg("Login Success");
                    setAPIErrorMsg("");
                    localStorage.setItem("token", apiLoginResponse.data.data.token);
                    localStorage.setItem("userId", apiLoginResponse.data.data.userId);
                } else {
                    setAPIErrorMsg("Login Details Incorrect");
                    setAPISuccessMsg("");
                }

            } catch (error) {
                console.error(error.response?.data || error.message);
                setAPIErrorMsg("Login failed");
                setAPISuccessMsg("");
            }
        }
    }

    async function getAllUsers() {
        var response = await axios.get('https://fakestoreapi.com/users');
        console.log((response.data));
    }

    async function getSingleUser() {
        var id = 10;
        var response = axios.get('https://fakestoreapi.com/users/' + id);
        console.log((await response).data.address.city);
    }



    return (
        <div className="container">
            <h3 className="text-success text-center mt-3">Login Page</h3>
            <form className="m-2 p-3">
                <div className="mb-3">
                    <label className="form-label" name="email-label">Email</label>
                    <input type="text" className="form-control" name="email" onChange={emailData => handleEmail(emailData)} placeholder="Email" />
                    <div className="text-danger">{emailError}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label" name="password-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={passwordData => handlePassword(passwordData)} placeholder="Password" />
                    <div className="text-danger">{pwordError}</div>
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-danger" onClick={e => handleLogin()}>Login</button>
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-warning" onClick={e => getAllUsers()}>Get All Users</button>
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-success" onClick={e => getSingleUser()}>Get Single User</button>
                </div>
                {(apiErrormsg || apiSuccessMsg) && (
                    <div className={`mb-3 alert ${apiErrormsg ? 'alert-danger' : 'alert-success'}`}>
                        {apiErrormsg || apiSuccessMsg}
                    </div>
                )}
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
