const SortOptions = ({ sortBy, onSort }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-bold">Products</h2>
      <div>
        <label className="mr-4">
          Sort by:{" "}
          <select
            value={sortBy}
            onChange={(e) => onSort(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="">Select</option>
            <option value="title">Title</option>
            <option value="price">Price</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SortOptions;
