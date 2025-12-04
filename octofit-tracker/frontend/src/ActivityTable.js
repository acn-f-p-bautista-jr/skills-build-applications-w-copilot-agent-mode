import React from 'react';

const activities = [
  { id: 1, name: 'Running', duration: '30 min', calories: 300 },
  { id: 2, name: 'Cycling', duration: '45 min', calories: 400 },
  { id: 3, name: 'Swimming', duration: '60 min', calories: 500 },
];

function ActivityTable() {
  return (
    <div className="card mb-4">
      <div className="card-header bg-primary text-white">
        <h2 className="mb-0">Activities</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Duration</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activity => (
              <tr key={activity.id}>
                <td>{activity.name}</td>
                <td>{activity.duration}</td>
                <td>{activity.calories}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ActivityTable;
