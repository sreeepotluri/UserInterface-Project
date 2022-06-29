import './App.css';
import Brands from "./components/Brands.js";
import Regarding from "./components/Regarding.js";

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
      <Regarding />

      <h1>Brand Application</h1>
      <Brands brands={brands}/>
    </div>
  );
}

export default App;
