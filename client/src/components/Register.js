import React from "react";
import { useState } from "react";
import "./Register.css";

function Register(){
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Name);
        console.log(Email);
        console.log(Phone);
    }

    return(<div className="register-container">
        <h1>Let us help you!</h1>
        <form onSubmit={handleSubmit}>
            <div className="reg-form-container">
            <label>Fullname: </label>
            <input type="text" className="regform-input" placeholder="your name here" onChange={e => setName(e.target.value)}></input>
            <label>Email: </label>
            <input type="email" className="regform-input" placeholder="your email here" onChange={e => setEmail(e.target.value)}></input>
            <label>Phone Number: </label>
            <input type="tel" className="regform-input" placeholder="your phone number here" onChange={e => setPhone(e.target.value)}></input>
            <input type="submit" className="regform-btn"></input>
            </div>
        </form>
    </div>);
}

export default Register;