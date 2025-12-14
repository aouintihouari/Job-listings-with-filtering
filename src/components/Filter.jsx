import iconRemove from "/images/icon-remove.svg";

const Filter = ({ filter, onDeleteFilter }) => {
  return (
    <div className="my-2 flex h-8 items-center justify-start overflow-hidden">
      <div className="ml-4 h-full rounded-lg bg-green-50 px-3 py-1 font-bold text-green-400">
        {filter}
      </div>
      <div
        onClick={() => onDeleteFilter(filter)}
        className="flex h-full cursor-pointer items-center rounded-r-lg bg-green-400 p-2 duration-300 hover:bg-black"
      >
        <img src={iconRemove} alt="icon remove" />
      </div>
    </div>
  );
};

export default Filter;
