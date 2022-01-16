import './App.css'
import Homepage from './components/homepage/homepage'
import Login from './components/login/login'
import Register from './components/register/register'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { useEffect, useState } from 'react'
import { Redirect } from 'react-router'
import axios from 'axios'
import baseUrl from './baseUrl'

function App() {

  const [ user, setLoginUser ] = useState()

  useEffect(() => {
      setLoginUser(JSON.parse(localStorage.getItem("user")))
  },[])

  const updateUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
    setLoginUser(user)
  }

  useEffect(() => {
    axios.get(`${baseUrl}/api/login`)
  .then(res => setLoginUser(res.data))
  },[localStorage.getItem("user")])

  return (
    <div className="App">
      {/* {console.log(user)} */}
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user?._id ? <Homepage  updateUser={updateUser} user={user} /> : <Redirect to="/login" />
            }
          </Route>
          <Route path="/login">
            <Login  updateUser={updateUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
