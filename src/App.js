import './App.css'
import Homepage from './components/homepage/homepage'
import Login from './components/login/login'
import Register from './components/register/register'
import { BrowserRouter as Router, Routes, Route , Navigate } from "react-router-dom";
import { useEffect, useState } from 'react'


function App() {

  const [ user, setLoginUser ] = useState()

  useEffect(() => {
      setLoginUser(JSON.parse(localStorage.getItem("user")))
  },[])

  const updateUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
    setLoginUser(user)
  }

  return (
    <div className="App">
      <Router>
				<Routes>
					<Route index element={ user&& user._id ? <Homepage  updateUser={updateUser} user={user}  />  : <Login  updateUser={updateUser} /> } />
					<Route path="/login" element={ <Login  updateUser={updateUser} />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</Router>
    </div>
  );
}

export default App;
