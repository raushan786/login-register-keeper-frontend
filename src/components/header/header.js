import React, { useReducer } from "react"
import "./header.css"

const Header = ({updateUser, user}) => {
    var user = JSON.parse(localStorage.getItem('user'));
    return(
        <div className="header">
        <div className="name">Welcome {user.name}</div>
        <h2 className="appname">Keeper App</h2>
        <div className="button" onClick= {() => updateUser({})}>Logout</div>
    </div>
    )
}

export default Header