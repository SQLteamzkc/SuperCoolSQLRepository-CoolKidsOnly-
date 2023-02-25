import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Create from './Components/Pages/Create';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<Create/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
