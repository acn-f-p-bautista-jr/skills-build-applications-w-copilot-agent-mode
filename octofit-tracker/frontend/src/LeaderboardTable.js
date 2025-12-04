import React from 'react';

const leaderboard = [
  { rank: 1, name: 'Alice', score: 500 },
  { rank: 2, name: 'Bob', score: 400 },
  { rank: 3, name: 'Charlie', score: 300 },
];

function LeaderboardTable() {
  return (
    <div className="card mb-4">
      <div className="card-header bg-warning text-dark">
        <h2 className="mb-0">Leaderboard</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(entry => (
              <tr key={entry.rank}>
                <td>{entry.rank}</td>
                <td>{entry.name}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderboardTable;
