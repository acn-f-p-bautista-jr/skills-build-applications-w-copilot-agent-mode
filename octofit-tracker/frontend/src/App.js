

import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActivityTable from './ActivityTable';
import TeamCard from './TeamCard';
import LeaderboardTable from './LeaderboardTable';
import WorkoutForm from './WorkoutForm';
import ModalDialog from './ModalDialog';

function App() {
  // Demo modal state
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="App bg-light min-vh-100">
      {/* Bootstrap Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="OctoFit Logo" className="octofit-logo" />
            OctoFit Tracker
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Workouts</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ActivityTable />
            <TeamCard />
          </div>
          <div className="col-md-6">
            <LeaderboardTable />
            <WorkoutForm />
            <button className="btn btn-info mt-3" onClick={() => setShowModal(true)}>
              Show Modal Example
            </button>
          </div>
        </div>
      </div>

      {/* Modal Example */}
      <ModalDialog show={showModal} onClose={() => setShowModal(false)} title="Bootstrap Modal">
        <p>This is a Bootstrap-styled modal dialog example.</p>
      </ModalDialog>
    </div>
  );
}

export default App;
