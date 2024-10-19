import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import ChallengePage from "./Pages/ChallengePage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
