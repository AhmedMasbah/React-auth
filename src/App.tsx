import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Nav from "./components/Nav";
import axios from "axios";
import Forget from "./pages/Forget";
import Reset from "./pages/Reset";

function App() {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('user');
        const user = response.data;
        setUser(user);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUser(null);
      }
    })();
  }, [login]);
  

  return (
    <div className="App">
      <BrowserRouter>
        <Nav user={user} setLogin={() => setLogin(false)} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/login" element={<Login setLogin={setLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget" element={<Forget/>} />
          <Route path="/reset/:token" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
