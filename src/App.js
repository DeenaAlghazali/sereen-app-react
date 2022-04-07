import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/About-us" element={<h1>About us</h1>}></Route>
        <Route path="/shop" element={<h1>shop</h1>}></Route>
        <Route path="/single-product" element={<h1>single-product</h1>}></Route>
        <Route path="/cart" element={<h1>cart</h1>}></Route>
        <Route path="/whish-list" element={<h1>whish-list</h1>}></Route>
        <Route path="/blog" element={<h1>blog</h1>}></Route>
        <Route path="/*" element={<h1>page Not Found</h1>}></Route>
      </Routes>
    </Router>
    </>
  );
} 

export default App;
