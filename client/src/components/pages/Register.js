import { fetchData } from "../../main.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
const navigate = useNavigate();

  const [user, setUser] = useState({
    username: '',  //sreeepotluri
    password: '', //pancakes
    password2: '' //icecreams
  });

  const {username, password, password2} = user;  

  const onChange = (e) => setUser({...user, [e.target.name]: e.target.value});

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/user/register", 
      {
       username, //sreeepotluri
       password, //pancakes
       password2  //icecreams
      }, 
      "POST")
    .then((data) => {
      if(!data.message) {
        navigate("/brands");
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
          <label htmlFor="fullname" className="form-label">Type Full Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="fullname"
            name='fullname'
            onChange={onChange}
            value={username}
            required
          />
        </div>
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
          <label htmlFor="password" className="form-label">Type Password</label>
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
          <label htmlFor="password2" className="form-label">Confirm  Password</label>
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
        <input type="submit" className="btn btn-primary" value="Register"/>
      </form>
    </div>
  );
}

export default Register;