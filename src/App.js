import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Source from "./pages/Source";
import Notfound from "./pages/Notfound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./functions/ScrollToTop";

function App() {

return (
    <Router>
      <Navbar />
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/coin/:id' element={<Coin />}/>
          <Route path='/source' element={<Source />}/>
          <Route path='/notfound' element={<Notfound />}/>
          <Route path='/*' element={<Notfound />}/>
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
