import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Checkout from './Components/Pages/Checkout';
import Contact from './Components/Pages/Contact';
import Cart from './Components/Pages/Cart';
import NewCollection from './Components/Pages/NewCollection'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewCollection" element={<NewCollection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/catalog" element={<Catalog />} /> */}
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
