// import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import Crypto from './Cryptocurrency/Crypto';
import Login from './Login/Login';
import Nav from './Main/Nav';
import Home from './Main/Home';
import Covid from './Covid/Covid';
import Nasa from './Nasa/Nasa';

function App() {
  return (
    <div className="w-100">
      <BrowserRouter >
      <Nav/>
      <Routes>
        <Route index to="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/crypto" element={<Crypto/>} />
        <Route path="/Covid" element={<Covid/>} />
        <Route path="/Nasa" element={<Nasa />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
