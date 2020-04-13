import React, { useState, useEffect } from "react";
import data from "./assets/data.json";
import JobTile from "./components/JobTile";

// console.log(data);
function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  console.log(jobs);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch("https://swapi.co/api/planets/4/");
  //     res
  //       .json()
  //       .then(res => setPlanets(res))
  //       .catch(err => setErrors(err));
  //   }

  //   fetchData();
  // });

  return (
    <div className="App">
      <h1>Job Listing App</h1>
      {jobs.length === 0 ? (
        <p>Loading...</p>
      ) : (
        jobs.map((job) => <JobTile job={job} key={job.id} />)
      )}
    </div>
  );
}

export default App;
