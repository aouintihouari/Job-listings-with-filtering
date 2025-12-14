const Clear = ({ onClearFilters }) => {
  return (
    <div
      onClick={onClearFilters}
      className="cursor-pointer font-bold text-gray-400 duration-300 hover:opacity-60"
    >
      Clear
    </div>
  );
};

export default Clear;
