import React, { Component } from "react";
import "./Sickle.css";

class Sickle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="topnav">
          <a className="navbar-brand" href="/">
            <img style={{ height: 40 }} src="directi_logo1.png" alt="Directi" />
          </a>
          <a className="active" href="/livePostings">
            Live Postings
          </a>
          <a className="nothing" href="/archivedPostings">
            Archived Postings
          </a>
          <div className="search-container">
            <div>
              <a href="/logout">Sign out</a>
            </div>
            <div>
              <a className="active" href="/upload">
                Upload
              </a>
            </div>
            <div>
              <a className="active" href="/modifyUser">
                Users
              </a>
            </div>
            <div className="dropdown">
              <a className="active" href="/dontknow">
                Options
              </a>
              <br />
              <br />
              <div className="dropdown-content">
                <a href="/team">Team Reports</a>
                <br />
                <a href="/recruiterLivePostings">Recruiter Filter Live</a>
                <br />
                <a href="/recruiterArchivedPostings">
                  Recruiter Filter Archived
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="topnav">
          <div className="search-container" style={{ textAlign: "right" }}>
            Last Updated:
            <br /> 16-02-2019 12:23
          </div>
        </div>
      </div>
    );
  }
}

export default Sickle;
