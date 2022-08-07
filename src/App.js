import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(0);
  const fetchData = async () => {
    const response = await fetch(url);
    const newData = await response.json();
    setJobs(newData);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="title">
        <h1>Loading...</h1>
      </div>
    );
  }
  const { id, order, title, dates, duties, company } = jobs[index];
  return (
    <div className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, i) => {
            return (
              <button
                key={job.id}
                onClick={() => setIndex(i)}
                className={`job-btn ${i === index && `active-btn`}`}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <div className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty) => {
            return (
              <>
                <div className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
