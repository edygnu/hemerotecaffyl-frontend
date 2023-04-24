import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

import PrincipalPage from './pages/PrincipalPage';
import TitulosPage from './pages/TitulosPage';
import ExistenciasPage from './pages/ExistenciasPage';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<PrincipalPage />} />
          <Route path="/existencias" element={<ExistenciasPage />} />
          <Route path="/titulos" element={<TitulosPage />} />
          <Route path="/novedades" element={<NovedadesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
