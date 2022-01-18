import React from "react"
import "./header.css"

const Header = ({setLoginUser}) => {
    return(
        <div class="header">
        <h1>The Keeper App</h1>
        <div className="button" onClick= {() => setLoginUser({})}>Logout</div>
    </div>
    )
}

export default Header