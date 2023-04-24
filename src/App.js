import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
<<<<<<< HEAD
import Nav from './components/layout/Nav';

import PrincipalPage from './pages/PrincipalPage';
import TitulosPage from './pages/TitulosPage';
import ExistenciasPage from './pages/ExistenciasPage';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';
=======
import Footer from './components/layout/Footer';
>>>>>>> 8d509e0462937c2e5119feb53cccd31e919aa7d5

function App() {
  return (
    <div className="App">
      <Header />
<<<<<<< HEAD
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
=======
      <Footer />

>>>>>>> 8d509e0462937c2e5119feb53cccd31e919aa7d5
    </div>
  );
}

export default App;
