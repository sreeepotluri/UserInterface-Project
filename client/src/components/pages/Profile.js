import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Profile = () => {

const navigate = useNavigate();

  const [brandvalue, setbrandValue] = useState({
      brand:''
    }); 
  const [brands, setBrands] = useState({brands:[]});

  const onChange = (e) => setbrandValue({...brandvalue, [e.target.name]: e.target.value});

  const onSubmit=(e) =>{e.preventDefault();
      console.log(brands);
      var dateData = new Date();

      axios.brand("/brand/create",
        {
          brandname: brands,
          brandsellingdateandtime: dateData,
        },
        {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        }
      )
       .then((response) => {
         console.log(response);
       })
       .catch((error) =>{
          console.log(error);
       });
  };
  
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>
            Create Brand value :
            <input
              type="text"
              name="brand"
              id="brand"
              onChange={onChange}
              placeholder="Enter Brand Value"
              value={brands}
            />
          </label>
          <input type="submit" value="Submit" />
        </div>
      </form>

      <div>
        <h2>Brands</h2>
        <ul>
          <li>SreeePotluri</li>
          {/* {posts.map((post) =>
              <li key={brand.id}>{brand.brandname}</li>
            ) } */}
        </ul>
      </div>
    </>
  );
};

export default Profile;