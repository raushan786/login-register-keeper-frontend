import React, { useEffect, useState } from "react"
import ShowKeeper from "../showkeeper/showkeeper"
import Addkeeper from "../addkeeper/addkeeper"
import Header from "../header/header"
import axios from "axios"
import "../homepage/homepage.css"
import baseUrl from "../../baseUrl"

const Homepage = ( { updateUser, user, setLoginUser } ) => {

    const [ keeperList, setKeeperList ] = useState([])

    useEffect(() =>{
      axios.post(`${baseUrl}/api/getAll`, {userId: user._id})
      .then(res => setKeeperList(res.data))
    }, [])

    return(
        <div>
            <Header  setLoginUser={setLoginUser}/>
     <Addkeeper user={user} keeperList={keeperList} setKeeperList={setKeeperList} />
     <ShowKeeper   user={user} keeperList={keeperList} setKeeperList={setKeeperList} />
        </div>
    )
}

export default Homepage