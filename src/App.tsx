import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import Home from './components/Home';
import { HashRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </HashRouter>
  );
}


export default App;