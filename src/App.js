import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import ChallengePage from "./Pages/ChallengePage";
import ProfilePage from "./Pages/ProfilePage";
import SignInPage from "./Pages/SignInPage";
import LeaderboardPage from "./Pages/LeaderboardPage";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/challenge" element={<ChallengePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/signIn" element={<SignInPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
