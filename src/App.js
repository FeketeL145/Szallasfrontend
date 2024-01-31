import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Bejelentkezes } from './pages/Bejelentkezes';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bejelentkezes" element={<Bejelentkezes/>} />
        <Route path="/osszes-szallas" element={<SzallasLista/>} />
        <Route path="/szallas/:szallasId" element={<SzallasSingle/>} />
        <Route path="*" element={<Bejelentkezes/>} />
      </Routes>
    </Router>
  );
}

export default App;
