import { Outlet, Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import { useContext, Fragment} from "react";

const Navbar = () => {
   
   const { user } = useContext(UserContext);

   const authenticated = (
    <Fragment>
      <h2>Hello Everyone, {user.username}! </h2>
    </Fragment>
   );

   const guest = (
    <Fragment>
      <h2>
        Welcome To United States Of America
      </h2>
    </Fragment>
   );

    return (
  <div>
   <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link className="navbar-brand" to="/">Regarding</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/brands">Brands</Link>
        </li>
     </ul>
    </div>
   </div>
  </nav>  

  <Outlet />

  </div>
 );
}

export default Navbar;