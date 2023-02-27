import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Create from './Components/Pages/Create';
import Read from './Components/Pages/Read';
import Update from './Components/Pages/Update';
import Delete from './Components/Pages/Delete';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/record-create' element={<Create/>}/>
        <Route path='/record-read' element={<Read/>}/>
        <Route path='/record-update' element={<Update/>}/>
        <Route path='/record-delete' element={<Delete/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
