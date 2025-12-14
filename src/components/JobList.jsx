import data from "../data/data.json";
import { Job } from "./";

const JobList = ({ onAddFilter, filters }) => {
  const filteredJobs = data.filter((job) => {
    if (filters.length === 0) return true;
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
    return filters.every((filter) => jobTags.includes(filter));
  });

  return (
    <section className="mx-auto mt-30 max-w-5xl px-4 pb-10 md:mt-20 md:w-full">
      {filteredJobs.map((job) => (
        <Job key={job.id} onAddFilter={onAddFilter} {...job} />
      ))}
    </section>
  );
};

export default JobList;
