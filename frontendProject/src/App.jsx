import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import FirstPage from './firstPage/FirstPage';
function App() {
    const token = sessionStorage.getItem('token');

    return (
        <>
            <Router>
                <main>
                    <Routes>
                        <Route path="/" element={<FirstPage />} />
                        <Route path="/login" element={token ? alert('välkommen') : <Login />} />
                    </Routes>
                </main>
            </Router>
        </>
    );
}

export default App;
