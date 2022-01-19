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
            const {email, password} = user
            if(email && password){
            axios.post(`${baseUrl}/api/login`, user)
            .then(res => {
             updateUser(res.data.user)
             navigate("/")
             })
            }else{
                alert("invalid input")
             }
        }

    return(
        <div className="top">
        <div className="login">
          <h1 className="title">Login</h1>
          <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={handleChange}></input>
          <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
           <div className="button" onClick={login}>Login</div>
           <p>or</p>
           <div className="button" onClick={() => navigate("/register")}>Register</div> 
        </div>
        </div>
    )
    
}

export default Login