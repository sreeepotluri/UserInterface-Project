import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();

    const [brand, setBrand] = useState({
      bd:''
    });
    const {bd} = brand;  

    const onChange = (e) => setBrand({...brand, [e.target.name]: e.target.value})
  
    const onSubmit = (e) => {
      e.preventDefault();

      console.log(brand)
  
    return (
        <form onSubmit={onSubmit}>
        <div id="root">
          <label>
            Brand
            <input type="text" name="bd" id="bd" onChange={onChange} placeholder="Enter Brand Value" value = {bd} />
          </label>
          <input type="submit" value="Submit" />
          </div>
        </form>
      );
    }
}

  export default Profile;