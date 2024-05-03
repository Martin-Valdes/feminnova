import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./components/HomeContainer/HomeContainer.jsx";
import NavBar from "./components/NavBav/Navbar.jsx";
import i18n from "./components/Traslation/Traslation.jsx";
import MetodWorks from "./components/MetodWorks/MetodWorks.jsx";
import ContactoContainer from "./components/ContactoContainer/ContactoContainer.jsx";
import WorkshopContainer from "./components/WorkshopContainer/WorkshopContainer.jsx";
import ServicesContainer from "./components/ServicesContainer/ServicesContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";

i18n.init();

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="metodwork" element={<MetodWorks />} />
          <Route path="/contact" element={<ContactoContainer />} />
          <Route path="/workshops" element={<WorkshopContainer />} />
          <Route path="/services" element={<ServicesContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
