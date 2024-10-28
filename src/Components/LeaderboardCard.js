import React from "react";
import "../App.css";

const LeaderboardCard = ({
  username,
  totalSubmissions,
  currentStreak,
  totalWords,
  totalLikes,
}) => {
  return (
    <div
      className="card"
      style={{
        width: "300px",
        margin: "10px auto",
      }}
    >
      <div className="card-body">
        <h4 className="card-title">{username}</h4>
        <h6>Total Submissions: {totalSubmissions}</h6>
        <h6>Current Streak: {currentStreak}</h6>
        <h6>Total Words: {totalWords}</h6>
        <h6>Total Likes: {totalLikes}</h6>
      </div>
    </div>
  );
};

export default LeaderboardCard;
