import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Checkout from './Components/Pages/Checkout';
import Contact from './Components/Pages/Contact';
// import Catalog from './Components/Pages/Catalog';
import Cart from './Components/Pages/Cart';
import NewCollection from './Components/Pages/NewCollection'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import "./index.css";

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewCollection" element={<NewCollection />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          {/* <Route path="/Catalog" element={<Catalog />} /> */}
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
