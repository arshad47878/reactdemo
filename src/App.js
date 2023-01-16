import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Image from './Component/Image';
import Home from './Component/Home';
import Sweet from './Component/Cloth';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import Namkin from './Component/Jewellery';
import RoutesConfig from './routes/RoutsConfig';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <br />
        <RoutesConfig></RoutesConfig>
      </BrowserRouter>
    </>
  );
}

export default App;
