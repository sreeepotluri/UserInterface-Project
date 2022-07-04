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
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navbar />} >
           <Route index element={<Regarding />} />
           <Route path ="brands" element={<Brands brands={brands}/>} />
           <Route path="register" element={<Register />} />
           <Route path="login" element={<Login />} />
      </Route>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
