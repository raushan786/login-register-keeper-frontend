import React from "react"
import "./header.css"

const Header = ({updateUser}) => {
    return(
        <div class="header">
        <h2>The Keeper App</h2>
        <div className="button" onClick= {() => updateUser({})}>Logout</div>
    </div>
    )
}

export default Header