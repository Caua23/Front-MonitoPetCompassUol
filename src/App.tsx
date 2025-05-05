import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Catalogo } from "./pages/Catalogo";

function App() {
  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
