import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/contact" element={ <Contact /> } />

          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>

      <a href="https://wa.me/7532080633?text=Hello%2C%20i%20want%20to%20know%20about%20the%20products" className="wa" target="_blank" rel="noreferrer" >
        <i class="fa fa-whatsapp my-wa"></i>
      </a>
    </div>
  );
}

export default App;
