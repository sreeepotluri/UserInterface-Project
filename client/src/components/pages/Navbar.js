import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
  <div>
   <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link className="navbar-brand" to="/">Brand Application</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
          <Link class="nav-link" to="/profile">Profile</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
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