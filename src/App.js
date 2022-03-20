import {useState} from "react";
import { Login } from "./components/login";
import { Home } from "./components/home";
import './App.css';


import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from "./components/navbar"
import Creator from "./pages/Creator"



const App = () => {
  const [user, setUser] = useState();

  return (
     <Router>
        <Navbar user = {user}/>
          <Routes>
          <Route path='/Creator' element ={<Creator/>} />
           {/* <Route path='/' element = {<Login setUser = {setUser} user = {user} />} /> */}
           <Route path='/Home' element = {<Home /> }/>
          </Routes>

    
 

    <div className= "App">
      {user ? <h1>{user.username.toUpperCase()}</h1> : <h1 className="title"> Fake A gram </h1> }
      {!user &&  <h4> Login to view some cool pictures or create a account</h4> } 
      {!user ? <Login setUser = {setUser} user = {user} /> : <Home />}
      </div>

    

    </Router>
    
  );
}
    

export default App;



