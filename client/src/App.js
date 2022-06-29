import './App.css';
import Brands from "./components/Brands.js";
import Regarding from "./components/Regarding.js";
import Navbar from "./components/Navbar.js";
import Registerform from "./components/Register.js";
import Loginform from "./components/Login.js";

const brands = [
  {
      id: 123,
      title: "Adidas"
  },
  {
      id: 456,
      title: "puma"
  },
  {
      id: 789,
      title: "Reebok"
  },
]

function App() {
  return (
    <div className="App">
      <Navbar />
      <Regarding />

      <h1>Brand Application</h1>
      <Brands brands={brands}/>
    </div>
  );
}

export default App;
