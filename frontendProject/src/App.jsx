import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login/login';
import FirstPage from './firstPage/FirstPage';
import Register from './register/register';

function App() {
    const token = sessionStorage.getItem('token');

    return (
        <>
            <Router>
                <main>
                    <Routes>
                        <Route path="/" element={<FirstPage />} />
                        <Route path="/login" element={token ? alert('välkommen') : <Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </main>
            </Router>
        </>
    );
}

export default App;
