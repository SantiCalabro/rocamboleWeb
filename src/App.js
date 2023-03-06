import NavBar from "./Components/NavBar";
import Home from "./Containers/Home";
import Detail from "./Containers/Detail";
import Section from "./Containers/Section";
import Distribution from "./Containers/Distribution";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:section" element={<Section />} />
        <Route exact path="/distribucion" element={<Distribution />} />
        <Route exact path="/products/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
