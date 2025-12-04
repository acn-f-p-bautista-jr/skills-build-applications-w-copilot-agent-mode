import React from 'react';

const team = {
  name: 'OctoFit Warriors',
  members: ['Alice', 'Bob', 'Charlie'],
  score: 1200,
};

function TeamCard() {
  return (
    <div className="card mb-4">
      <div className="card-header bg-success text-white">
        <h2 className="mb-0">Team</h2>
      </div>
      <div className="card-body">
        <h3>{team.name}</h3>
        <p><strong>Score:</strong> {team.score}</p>
        <ul className="list-group list-group-flush mb-3">
          {team.members.map((member, idx) => (
            <li key={idx} className="list-group-item">{member}</li>
          ))}
        </ul>
        <button className="btn btn-success">View Team</button>
      </div>
    </div>
  );
}

export default TeamCard;
