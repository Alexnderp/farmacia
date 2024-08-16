import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home/Home";
import CardCategoria from "./components/CardCategoria/CardCategoria";
import DeletarCategoria from "./components/DeletarCategoria/DeletarCategoria";
import ListaCategorias from "./components/ListaCategorias/ListaCategorias";
import FormCategoria from "./components/FormCategoria/FormCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/editCategoria/:id" element={<FormCategoria />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/deleteCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
