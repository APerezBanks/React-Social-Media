import { useState } from "react";  
import "./index.css";
import "../../App.css";


export const Login = ({setUser}) => {
const [username, setUsername] = useState();
const [email, setEmail] = useState();
const [pass, setPass] = useState();
const [bool, setBool] = useState(false);


const submitHandler = (e) => {
    e.preventDefault();
    if( email && email.includes("@")) {
      // let temp = username.toUpperCase()
      // setUsername(temp)
      // console.log(username)
    setUser({username: username, email: email, pass: pass});
   }
  };

    return (
    < div className="signUp">
      
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

      <button  type="submit"  >Submit</button>
     
      <button onClick={() => setBool(!bool)}>log-in or Sign-up </button>
      </form>
    </div>
    );
};

