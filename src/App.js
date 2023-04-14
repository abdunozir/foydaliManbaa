import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import Container from "./components/Container/Container";
import ExtractText from "./pages/ExtractText/ExtractText";
import Header from "./components/Header/Header";
// import ChangeType from "./pages/ChangeType/ChangeType";
import KrilLotin from "./pages/KrilLotin/KrilLotin";
import Read from "./pages/Read/Read";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/" element={<ExtractText />} />
          {/* <Route path="/turiniozgartirsh" element={<ChangeType />} /> */}
          <Route path="/krillotin" element={<KrilLotin />} />
          <Route path="/oqibberish" element={<Read />} />
          <Route path="/aloqa" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>

      {location.pathname === "/aloqa" ? "" : <Footer />}
    </div>
  );
}

export default App;
