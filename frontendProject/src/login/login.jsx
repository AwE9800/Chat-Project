import './login.css';
import { authenticate } from '../service/authService.js';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const resp = await authenticate({ email, password });
            if (resp.authenticated) {
                window.location.href = '/chattCenter';
            } else {
                setError('Felaktiga inloggningsuppgifter');
            }
        } catch (error) {
            console.error('Authentication error:', error);
            setError('Något gick fel. Försök igen senare.');
        }
    };

    const handleRegister = () => {
        window.location.href = '/register';
    };

    return (
        <section className="login-container">
            <form className="formLogin" onSubmit={handleSubmit}>
                <h2>Logga in</h2>
                <label htmlFor="ePost">E-postadress</label>
                <input type="text" name="ePost" value={email} onChange={e => setEmail(e.target.value)} />
                <label htmlFor="password">Lösenord</label>
                <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                {error && <div className="error">{error}</div>}
                <div className="button-container">
                    <button className="login" type="submit">
                        Logga in
                    </button>
                    <button type="button" onClick={handleRegister} className="register-button">
                        Registrera
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Login;
