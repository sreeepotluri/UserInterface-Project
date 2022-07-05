import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();

    const [textbrand, settextBrand] = useState({
      brand:''
    });
    const {brand} = textbrand;  

    const onChange = (e) => settextBrand({...textbrand, [e.target.name]: e.target.value})
  
  
  
    return (
        <form>
        <div>
          <label>
            Create Brand Value:
            <input type="text" name="brand" id="brand" onChange={onChange} placeholder="Enter Brand Value" value = {brand} />
          </label>
          <input type="submit" value="Submit" />
          </div>
        </form>
      );
    }


  export default Profile;