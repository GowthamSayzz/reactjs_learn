import { useState } from "react";
import { validateEmail } from "../Utils/utils";
import axios from "axios";

function Signup() {
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");

    var [nameError, setNameError] = useState("");
    var [emailError, setEmailError] = useState("");
    var [pwordError, setpwordError] = useState("");

    var [apiErrormsg, setAPIErrorMsg] = useState("");
    var [apiSuccessMsg, setAPISuccessMsg] = useState("");

    function handleName(nameInput) {
        setName(nameInput.target.value);
    }

    function handleEmail(emailInput) {
        setEmail(emailInput.target.value);
    }

    function handlePassword(pwordInput) {
        setPassword(pwordInput.target.value);
    }

    async function handleSignup() {
        var noOfErrors = 0;
        if (name.length <= 3) {
            setNameError("Name is too short");
            noOfErrors++;
        } else {
            setNameError("");
        }

        if (validateEmail(email)) {
            setEmailError("");
        } else {
            setEmailError("Email is not valid");
            noOfErrors++;
            console.log("Validating email:", email, validateEmail(email));
        }
        if (password.length < 3) {
            setpwordError("Password Length Must Be 8 Characters");
            noOfErrors++;
        } else {
            setpwordError("");
        }

        if (noOfErrors === 0) {
            try {
                var apisignupData = {
                    'email': email, 'password': password, 'name': name, 'mobile': 9123456780
                }
                var apiSignupResponse = await axios.post('https://api.softwareschool.co/auth/signup', apisignupData);
                if (apiSignupResponse.data.result === 'SUCCESS') {
                    setAPISuccessMsg(apiSignupResponse.data.message);
                    setAPIErrorMsg("");
                    console.log(apiSignupResponse.data.data.userId);
                } else {
                    setAPIErrorMsg(apiSignupResponse.data.message);
                    setAPISuccessMsg("");
                }
            } catch (error) {
                console.log(error.message);
            }
        }
    }
    return (
        <div className="container">
            <h3 className="text-success text-center mt-3">Create Account</h3>
            <form className="m-2 p-3">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" onChange={nameInput => handleName(nameInput)} className="form-control" placeholder="Name"></input>
                    <div className="text-danger">{nameError}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" onChange={emailInput => handleEmail(emailInput)} className="form-control" placeholder="Email"></input>
                    <div className="text-danger">{emailError}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" onChange={pwordInput => handlePassword(pwordInput)} className="form-control" placeholder="Password"></input>
                    <div className="text-danger">{pwordError}</div>
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-success" onClick={e => handleSignup()}>Create Account</button>
                </div>
                <div className="mb-3">
                    {apiErrormsg} {apiSuccessMsg}
                </div>
                <div className="mb-3">
                    <a href='/login'>Login</a>
                </div>
                <div className="mb-3">
                    <a href='/'>Home</a>
                </div>
            </form>
        </div>
    );
}

export default Signup;
