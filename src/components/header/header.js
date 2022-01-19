import React from "react"
import "./header.css"

const Header = ({updateUser}) => {
    return(
        <div class="header">
        <h1>The Keeper App</h1>
        <div className="button" onClick= {() => updateUser({})}>Logout</div>
    </div>
    )
}

export default Header