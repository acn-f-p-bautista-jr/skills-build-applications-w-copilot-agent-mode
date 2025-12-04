import React from 'react';

function WorkoutForm() {
  return (
    <div className="card mb-4">
      <div className="card-header bg-info text-white">
        <h2 className="mb-0">Add Workout</h2>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <label htmlFor="workoutName" className="form-label">Workout Name</label>
            <input type="text" className="form-control" id="workoutName" placeholder="Enter workout name" />
          </div>
          <div className="mb-3">
            <label htmlFor="duration" className="form-label">Duration (min)</label>
            <input type="number" className="form-control" id="duration" placeholder="Enter duration" />
          </div>
          <div className="mb-3">
            <label htmlFor="calories" className="form-label">Calories Burned</label>
            <input type="number" className="form-control" id="calories" placeholder="Enter calories" />
          </div>
          <button type="submit" className="btn btn-info">Add Workout</button>
        </form>
      </div>
    </div>
  );
}

export default WorkoutForm;
