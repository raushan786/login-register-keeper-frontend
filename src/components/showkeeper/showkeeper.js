import React from "react"
import "./showkeeper.css"
import axios from "axios"
import baseUrl from "../../baseUrl"

const ShowKeeper = ({keeperList, setKeeperList}) => {

const deleteKeeper = (id) => {
    axios.post(`${baseUrl}/api/delete`, {id})
    .then(res => setKeeperList(res.data))
}

    return(
        <div className="showKeeper row">
                {
                    keeperList.map(keeper =>(
                    <div className="keepercard col-md-3" key= {keeper._id}>
                        <h2 className="title">{keeper.title} <i className= "deleteIcon fas fa-trash-alt" aria-hidden="true" onClick={() => deleteKeeper(keeper._id)} ></i></h2>
                        <textarea className="descriptionBox" value={keeper.description} readOnly />
                    </div>
                    ))
                }

        </div>
    )
}
export default ShowKeeper