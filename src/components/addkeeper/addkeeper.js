import React from "react"
import { useState } from "react"
import "./addkeeper.css"
import axios from "axios"
import baseUrl from "../../baseUrl"

const Addkeeper = ({setKeeperList, user}) => {

    const [keeperObj, setKeeperObj] = useState({
        title: "",
        description: ""
    })

    const  handleChange = e => {
        const {name, value} = e.target
        setKeeperObj({
            ...keeperObj,
            [name]: value
        })
    }
    const add = () => {
        if(keeperObj.title){
            axios.post(`${baseUrl}/api/addNew`, {...keeperObj, userId: user._id})
            .then(res => setKeeperList(res.data))
            setKeeperObj({
                title: "",
                description: ""
            })
        }
    }

    return(
       <div className="addkeeper">
          <input 
            className="inputBox titleInput"
            type="text"
            name="title"
            autoComplete="off"
            placeholder="Add title"
            onChange={handleChange}
            value={keeperObj.title}
          />
          <textarea 
            className="inputBox description"
            name="description"
            placeholder="Add Discription Here"
            onChange={handleChange}
            value={keeperObj.description}
          />
          <div className="addButton" onClick={add}>Add</div>
       </div> 
    )
}
export default Addkeeper