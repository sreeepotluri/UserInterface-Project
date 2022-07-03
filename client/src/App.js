import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Brands from "./components/pages/Brands.js";
import Regarding from "./components/pages/Regarding.js";
import Navbar from "./components/pages/Navbar.js";
import Register from "./components/pages/Register.js";
import Login from "./components/pages/Login.js";

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
      <Brands />
      <Register />
      <Login />

      <h1>Brand Application</h1>
      <Brands brands={brands}/>
    </div>
  );
}

export default App;
