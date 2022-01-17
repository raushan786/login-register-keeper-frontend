import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import baseUrl from "../../baseUrl"

const Login = ( { updateUser } ) => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        email: "",
        password: ""
    }) 
    
        const handleChange = e => {
            const {name, value} = e.target
            setUser({
                ...user,
                [name]: value
            })
        }

        const login = () => {
            axios.post(`${baseUrl}/api/login`, user)
            .then(res => {
             updateUser(res.data.user)
             navigate("/")
             })
        }

    return(
        
        <div className="header">
        <div className="login">
          <h1>Login</h1>
          <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={handleChange}></input>
          <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
           <div className="button" onClick={login}>Login</div>
           <div>or</div>
           <div className="button" onClick={() => navigate("/register")}>Register</div> 
        </div>
        </div>
    )
    
}

export default Login