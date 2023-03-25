import './App.css';
import Navbar from './Section/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Section/Home/Home';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
