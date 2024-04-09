import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./login/login";
import FirstPage from "./firstPage/FirstPage";
import Register from "./register/register";
import SelectRoms from "./selectRoms/selectRoms";

function App() {
  const token = sessionStorage.getItem("token");

  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route
              path="/login"
              element={token ? alert("välkommen") : <Login />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/selectRoms" element={<SelectRoms />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
