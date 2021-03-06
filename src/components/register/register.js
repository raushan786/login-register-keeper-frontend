import React, {useState} from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import baseUrl from "../../baseUrl"

const Register = () => {

    const navigate = useNavigate();

const [ user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
}) 

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {name, email, password, reEnterPassword } = user
        if(name && email && password && (password === reEnterPassword)){
            axios.post(`${baseUrl}/api/register`, user)
            .then(res => {
                alert(res.data.message)
                navigate("/login")
            })
        } else {
            alert("invalid input")
        }
    }

    return(
        <div className="top">
        <div className="register">
          <h1 className="title1">Register</h1>
          <input type="text" name="name" value={user.name} placeholder="Enter Name" onChange={handleChange}></input>
          <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}></input>
          <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange}></input>
          <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={handleChange}></input>
           <div className="button" onClick={register}>Register</div>
           <p>or</p>
           <div className="button" onClick={() => navigate("/login")}>Login</div> 
        </div>
        </div>
    )
}

export default Register