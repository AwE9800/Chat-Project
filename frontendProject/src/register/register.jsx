import "./register.css";
import { useState } from "react";
import { register } from "../service/registerService.js";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await register({ username, email, password });
      if (resp.registered) {
        window.location.href = "/login";
      } else {
        setError("Registreringen misslyckades. Var god försök igen.");
      }
    } catch (error) {
      console.error("Registreringsfel:", error);
      setError("Något gick fel. Försök igen senare.");
    }
  };

  return (
    <section className="register-container">
      <form onSubmit={handleSubmit}>
        <h2>Registrera dig</h2>
        <label htmlFor="username">Användarnamn</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">E-postadress</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Lösenord</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="error">{error}</div>}
        <div className="button-container">
          <button type="submit">Registrera</button>
        </div>
      </form>
    </section>
  );
};

export default Register;
