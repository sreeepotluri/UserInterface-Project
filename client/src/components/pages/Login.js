import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/userContext.js";


const Login = () => {
  const navigate = useNavigate();

  const {user, updateUser} = useContext(UserContext);


  const {username, password, password2} = user;  

  const onChange = (e) => updateUser(e.target.name, e.target.value)

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(user)

    fetchData("/user/login", 
      {
       username, //sreeepotluri
       password, //pancakes
       password2 //icecreams
      }, 
      "POST")
    .then((data) => {
      if(!data.message) {
        console.log(data)
      }
    })  
    .catch((error) => {
      console.log(error)
    })

  }

  return(
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Type Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username"
            name='username'
            onChange={onChange}
            value={username}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Type password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            name='password'
            onChange={onChange}
            value={password}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password2" className="form-label">confirm password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password2"
            name='password2'
            onChange={onChange}
            value={password2}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login"/>
      </form>
    </div>
  );
}

export default Login;