import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contato } from "./pages/Contato";
import { Catalogo } from "./pages/Catalogo";
import { Pet } from "./pages/Pet";
import { SignUp } from "./pages/SingUp";
import { Login } from "./pages/Login";
import { User } from "./pages/User";
import { Product } from "./pages/Product";

function App() {
  return (
    <>
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/pet/:id" element={< Pet/>} />
          <Route path="/pet/" element={< Pet/>} />
          <Route path="/product/:id" element={< Product/>} />
          <Route path="/auth/singUp" element={< SignUp/>} />
          <Route path="/auth/login" element={< Login/>} />
          <Route path="/catalogo/:category" element={< Catalogo/>} />
          <Route path="/user/:id" element={< User/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
