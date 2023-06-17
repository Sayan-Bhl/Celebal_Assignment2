
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ItemState from './Context/ItemState';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Components/Cart';
function App() {
  return (
    <div className="App">
      <ItemState>
        <BrowserRouter>
          <Navbar />
          <div className='content'>
            <Routes >
              <Route exact path="/" element={<Home />} />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </div>

        </BrowserRouter>

      </ItemState>
    </div>
  );
}

export default App;
