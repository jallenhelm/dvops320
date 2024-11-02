// import "./App.css";

const card = [
  {
    username: "JohnSmitty",
    totalSubmissions: 120,
    currentStreak: 15,
    totalWords: 7800,
    totalLikes: 320,
    lastSubmission: "11/02/2024"
  }
];

const user = card[0]

function ProfilePage() {
  return (
    <div className="container">
      <h2 className=" mt-3">Welcome {user.username}</h2>
      <section>
        <hr className="hr" />
        <div>Current Goal: 16/30 Streak</div>
        <hr className="hr" />
        <div>
          <ul>
            <li className="list-group-item mb-3">
              <h5 className="mb-1">Statistics</h5>
              <p className="mb-1">Total Submissions: {user.totalSubmissions}</p>
              <p className="mb-1">Total Likes: {user.totalLikes}</p>
              <p className="mb-1">Current Streak: {user.currentStreak}</p>
              <small>Last Submission: {user.lastSubmission}</small>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
