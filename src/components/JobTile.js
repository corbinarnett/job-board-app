import React from "react";

const JobTile = ({ job }) => {
  const jobAttributes = [job.role, job.level];

  if (job.languages) {
    jobAttributes.push(...job.languages);
  }

  if (job.tools) {
    jobAttributes.push(...job.tools);
  }

  return (
    <div className="flex bg-white shadow-md m-4 p-4 rounded">
      <div>
        <img src={job.logo} alt={job.company} />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="font-bold text-teal-700">
          {job.company}
          {job.new && <span className='text-teal-500 bg-teal-200 py-1 px-2 m-2 rounded '>New</span>}
          {job.featured && <span className='text-white bg-gray-800 p-1 rounded m-2'>Featured</span>}
        </h3>
        <h2 className="font-bold">{job.position}</h2>
        <p className="text-gray-700">
          {job.postedAt} • {job.contract} • {job.location}
        </p>
      </div>
      <div className="flex items-center ml-auto">
        {jobAttributes
          ? jobAttributes.map((att) => (
              <span className="font-bold text-teal-500 bg-teal-100 m-3 p-2 rounded">
                {att}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobTile;
