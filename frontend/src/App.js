import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './mainLayout';
import Login from './pages/components/login/login';
function App() {  
  return (
    <div className='MainApp'>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/*" element={<MainLayout />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
