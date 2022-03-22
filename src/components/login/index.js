import { useState } from "react";  
import { Navigate } from "react-router-dom";
import "./index.css";
import "../../App.css";


export const Login = ({user, setUser}) => {
const [username, setUsername] = useState();
const [email, setEmail] = useState();
const [pass, setPass] = useState();
const [bool, setBool] = useState(false);


const submitHandler = (e) => {
    e.preventDefault();
    if( email && email.includes("@")) {

    setUser({username: username, email: email, pass: pass});
   }
  };

  
    return (

    < div className="signUp">

      {user && <Navigate to="/Creator" />}      
      
      <form className="form" onSubmit={submitHandler}>
      <input className="input"
            onChange={(event) => setUsername(event.target.value) } 
            placeholder= "username" />
      {!bool && 
      <input className="input"
          onChange={(event) => setEmail(event.target.value) }
          placeholder= "email" type="email"/>}
      <input className="input"
          onChange={(event) => setPass(event.target.value) } 
                placeholder= "password" 
                type="password" />

      <button  type="submit" >Submit</button>
     
      <button onClick={() => setBool(!bool)}>log-in or Sign-up </button>
      </form>
    </div>
    );
};

