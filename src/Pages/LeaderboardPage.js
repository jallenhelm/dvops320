import LeaderboardCard from "../Components/LeaderboardCard";

const cards = [
  {
    username: "User1",
    totalSubmissions: 120,
    currentStreak: 15,
    totalWords: 7800,
    totalLikes: 320,
  },
  {
    username: "User2",
    totalSubmissions: 95,
    currentStreak: 12,
    totalWords: 6700,
    totalLikes: 280,
  },
  {
    username: "User3",
    totalSubmissions: 110,
    currentStreak: 10,
    totalWords: 7100,
    totalLikes: 300,
  },
  {
    username: "User4",
    totalSubmissions: 130,
    currentStreak: 18,
    totalWords: 8200,
    totalLikes: 350,
  },
  {
    username: "User5",
    totalSubmissions: 85,
    currentStreak: 9,
    totalWords: 6200,
    totalLikes: 250,
  },
  {
    username: "User6",
    totalSubmissions: 75,
    currentStreak: 8,
    totalWords: 5400,
    totalLikes: 210,
  },
  {
    username: "User7",
    totalSubmissions: 102,
    currentStreak: 14,
    totalWords: 6900,
    totalLikes: 290,
  },
  {
    username: "User8",
    totalSubmissions: 115,
    currentStreak: 16,
    totalWords: 7500,
    totalLikes: 315,
  },
  {
    username: "User9",
    totalSubmissions: 80,
    currentStreak: 6,
    totalWords: 5000,
    totalLikes: 225,
  },
  {
    username: "User10",
    totalSubmissions: 105,
    currentStreak: 13,
    totalWords: 7000,
    totalLikes: 305,
  },
];

const firstCard = cards[0]

function LeaderboardPage() {
  return (
    <div className="container">
      <h1>Welcome to the LeaderboardPage</h1>
      <section>
        <div id="top-10">
          <div className="row mb-3">
            <LeaderboardCard
              username={firstCard.username}
              totalSubmissions={firstCard.totalSubmissions}
              currentStreak={firstCard.currentStreak}
              totalWords={firstCard.totalWords}
              totalLikes={firstCard.totalLikes}
            />
          </div>
          <div className="row">
            {cards.slice(1).map((card, index) => (
              <div key={index} className="col-md-4 mb-4">
                <LeaderboardCard
                  username={card.username}
                  totalSubmissions={card.totalSubmissions}
                  currentStreak={card.currentStreak}
                  totalWords={card.totalWords}
                  totalLikes={card.totalLikes}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LeaderboardPage;
