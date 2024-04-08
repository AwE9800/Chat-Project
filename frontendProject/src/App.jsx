import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./login/login";
import Register from "./service/register/register";

function App() {
  const token = sessionStorage.getItem("token");

  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route
              path="/login"
              element={token ? alert("välkommen") : <Login />}
            />
            <Route
              path="/register"
              element={token ? alert("du är nu registrerad") : <Register />}
            />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
