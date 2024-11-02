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

const listItems = [
  {
    username: "User1",
    totalSubmissions: 120,
    currentStreak: 15,
    totalWords: 7800,
    totalLikes: 320,
    lastSubmission: "01/28/2024",
  },
  {
    username: "User2",
    totalSubmissions: 95,
    currentStreak: 10,
    totalWords: 6300,
    totalLikes: 240,
    lastSubmission: "01/27/2024",
  },
  {
    username: "User3",
    totalSubmissions: 200,
    currentStreak: 25,
    totalWords: 10200,
    totalLikes: 500,
    lastSubmission: "01/26/2024",
  },
  {
    username: "User4",
    totalSubmissions: 50,
    currentStreak: 5,
    totalWords: 3500,
    totalLikes: 180,
    lastSubmission: "01/25/2024",
  },
  {
    username: "User5",
    totalSubmissions: 140,
    currentStreak: 18,
    totalWords: 8500,
    totalLikes: 420,
    lastSubmission: "01/24/2024",
  },
  {
    username: "User6",
    totalSubmissions: 78,
    currentStreak: 7,
    totalWords: 4900,
    totalLikes: 210,
    lastSubmission: "01/23/2024",
  },
  {
    username: "User7",
    totalSubmissions: 160,
    currentStreak: 20,
    totalWords: 9000,
    totalLikes: 450,
    lastSubmission: "01/22/2024",
  },
  {
    username: "User8",
    totalSubmissions: 110,
    currentStreak: 13,
    totalWords: 7100,
    totalLikes: 310,
    lastSubmission: "01/21/2024",
  },
  {
    username: "User9",
    totalSubmissions: 45,
    currentStreak: 4,
    totalWords: 2900,
    totalLikes: 160,
    lastSubmission: "01/20/2024",
  },
  {
    username: "User10",
    totalSubmissions: 175,
    currentStreak: 22,
    totalWords: 9800,
    totalLikes: 480,
    lastSubmission: "01/19/2024",
  },
  {
    username: "User11",
    totalSubmissions: 130,
    currentStreak: 16,
    totalWords: 8300,
    totalLikes: 400,
    lastSubmission: "01/18/2024",
  },
  {
    username: "User12",
    totalSubmissions: 60,
    currentStreak: 6,
    totalWords: 4100,
    totalLikes: 190,
    lastSubmission: "01/17/2024",
  },
  {
    username: "User13",
    totalSubmissions: 180,
    currentStreak: 24,
    totalWords: 10000,
    totalLikes: 470,
    lastSubmission: "01/16/2024",
  },
  {
    username: "User14",
    totalSubmissions: 125,
    currentStreak: 14,
    totalWords: 7900,
    totalLikes: 330,
    lastSubmission: "01/15/2024",
  },
  {
    username: "User15",
    totalSubmissions: 85,
    currentStreak: 9,
    totalWords: 5500,
    totalLikes: 270,
    lastSubmission: "01/14/2024",
  },
  {
    username: "User16",
    totalSubmissions: 155,
    currentStreak: 19,
    totalWords: 8900,
    totalLikes: 430,
    lastSubmission: "01/13/2024",
  },
  {
    username: "User17",
    totalSubmissions: 100,
    currentStreak: 11,
    totalWords: 6700,
    totalLikes: 300,
    lastSubmission: "01/12/2024",
  },
  {
    username: "User18",
    totalSubmissions: 135,
    currentStreak: 17,
    totalWords: 8400,
    totalLikes: 410,
    lastSubmission: "01/11/2024",
  },
  {
    username: "User19",
    totalSubmissions: 40,
    currentStreak: 3,
    totalWords: 2600,
    totalLikes: 150,
    lastSubmission: "01/10/2024",
  },
  {
    username: "User20",
    totalSubmissions: 165,
    currentStreak: 21,
    totalWords: 9200,
    totalLikes: 460,
    lastSubmission: "01/09/2024",
  },
];


const firstCard = cards[0];

function LeaderboardPage() {
  return (
    <div className="container">
      <h1>Welcome to the LeaderboardPage</h1>
      <section id="top10Users">
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
      <hr className="hr" />
      <section >
        {listItems.map((listItem, index) => (
          <div key={index} className="list-group-item mb-3">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{listItem.username}</h5>
              <p className="mb-1">
                Total Submissions: {listItem.totalSubmissions}
              </p>
              <p className="mb-1">Total Likes: {listItem.totalLikes}</p>
              <p className="mb-1">Current Streak: {listItem.currentStreak}</p>
              <small>Last Submission: {listItem.lastSubmission}</small>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default LeaderboardPage;

            // <LeaderboardCard
            //   username={card.username}
            //   totalSubmissions={card.totalSubmissions}
            //   currentStreak={card.currentStreak}
            //   totalWords={card.totalWords}
            //   totalLikes={card.totalLikes}
            // />;