import './App.css';
import Navbar from './Section/NavBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar></Navbar>}></Route>
      </Routes>
    </div>
  );
}

export default App;
