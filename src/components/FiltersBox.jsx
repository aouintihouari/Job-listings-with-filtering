import { Filter } from "./";

const FiltersBox = ({ filters, children, onDeleteFilter }) => {
  return (
    <aside className="shadow-custom absolute top-30 left-1/2 mx-auto flex h-auto w-11/12 -translate-x-1/2 items-center justify-between rounded-lg bg-white p-5 md:top-43 md:w-5/10">
      <div className="flex flex-wrap">
        {filters.map((filter) => (
          <Filter
            key={filter}
            filter={filter}
            onDeleteFilter={onDeleteFilter}
          />
        ))}
      </div>
      {children}
    </aside>
  );
};

export default FiltersBox;
