import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Profile = () => {

const navigate = useNavigate();

  const [brandvalue, setbrandValue] = useState({
      brand:''
    }); 
  const {brand} = brandvalue;  

  const onChange = (e) => setbrandValue({...brandvalue, [e.target.name]: e.target.value})
  
   return (
        <form1>
        <div> 
          <label>
            Create Brand Value: 
            <br></br>
            <input type="text" name="brand" id="brand" onChange={onChange} placeholder="Enter Brand Value" value = {brand} />
          </label> 
          <input type="submit" className="btn btn-primary" value="Submit" />
          </div>
        </form1> // Create a Brand Value Is just Like Create A Post
      );
    }


  export default Profile;