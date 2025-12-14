import { useState } from "react";

import { Header, FiltersBox, Clear, JobList } from "./components";

const App = () => {
  const [filters, setFilters] = useState([]);

  const addFilter = (tag) => {
    if (!filters.includes(tag)) setFilters([...filters, tag]);
  };
  const deleteFilter = (tag) => setFilters(filters.filter((f) => f !== tag));
  const clearFilters = () => setFilters([]);

  return (
    <main className="font-spartan relative min-h-screen bg-teal-50/20">
      <Header />
      {filters.length > 0 && (
        <FiltersBox filters={filters} onDeleteFilter={deleteFilter}>
          <Clear onClearFilters={clearFilters} />
        </FiltersBox>
      )}
      <JobList onAddFilter={addFilter} filters={filters} />
    </main>
  );
};

export default App;
