const Job = ({
  onAddFilter,
  company,
  logo,
  isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  const tags = [role, level, ...languages, ...tools];

  return (
    <div
      className={`shadow-custom relative mx-auto my-10 flex w-11/12 flex-col items-start justify-between rounded-md border-l-4 border-l-green-400 bg-white p-6 md:my-6 md:w-full md:flex-row md:items-center md:p-8 ${featured ? "border-l-green-400" : "border-l-transparent"} `}
    >
      <img
        src={logo}
        alt={company}
        className="absolute -top-6 h-12 w-12 md:static md:mr-6 md:h-20 md:w-20"
      />
      <div className="w-full border-b border-gray-300 pt-4 pb-4 md:w-auto md:border-b-0 md:pt-0 md:pb-0">
        <div className="mb-2 flex items-center gap-4">
          <p className="text-sm font-bold text-green-400">{company}</p>
          <div className="flex gap-2 text-xs font-bold uppercase">
            {isNew && (
              <span className="rounded-full bg-green-400 px-2 py-1 pt-1.5 leading-none text-white">
                New!
              </span>
            )}
            {featured && (
              <span className="rounded-full bg-gray-800 px-2 py-1 pt-1.5 leading-none text-white">
                Featured
              </span>
            )}
          </div>
        </div>
        <h2 className="mb-2 cursor-pointer text-lg font-bold text-gray-800 transition-colors hover:text-green-400">
          {position}
        </h2>
        <div className="flex items-center gap-2 text-sm whitespace-nowrap text-gray-500">
          <span>{postedAt}</span>
          <span className="h-1 w-1 rounded-full bg-gray-500"></span>
          <span>{contract}</span>
          <span className="h-1 w-1 rounded-full bg-gray-500"></span>
          <span>{location}</span>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold md:mt-0 md:ml-auto">
        {tags.map((tag, index) => (
          <button
            onClick={() => onAddFilter(tag)}
            key={index}
            className="rounded bg-teal-50 px-2 py-1.5 text-green-400 transition-colors hover:bg-teal-500 hover:text-white"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Job;
