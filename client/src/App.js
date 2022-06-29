import './App.css';
import Brands from './components/Brands.js';

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
      <h1>Brand Application</h1>
      <Brands brands={brands}/>
    </div>
  );
}

export default App;
