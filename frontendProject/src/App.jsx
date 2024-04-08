import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login/login';
function App() {
    const token = sessionStorage.getItem('token');

    return (
        <>
            <Router>
                <main>
                    <Routes>
                        <Route path="/login" element={token ? alert('välkommen') : <Login />} />
                    </Routes>
                </main>
            </Router>
        </>
    );
}

export default App;
