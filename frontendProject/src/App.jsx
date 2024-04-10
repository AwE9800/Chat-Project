import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login/login';
import FirstPage from './firstPage/FirstPage';
import Register from './register/register';
import ChatPage from './chattCenter/ChatCenter';


function App() {
    const token = sessionStorage.getItem('token');

    return (
        <>
            <Router>
                <main>
                    <Routes>
                        <Route path="/" element={<FirstPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/chattCenter" element={<ChatPage />} />
                    </Routes>
                </main>
            </Router>
        </>
    );
 
}

export default App;
