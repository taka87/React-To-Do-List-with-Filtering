interface Props {
  setFilter: (filter: "all" | "active" | "completed") => void;
}

 // Renders filter buttons to choose which to-do items to display:
 // All, Active, or Completed.
export default function FilterButtons({ setFilter }: Props) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter("all")} className="filter-button">
        All
      </button>
      <button onClick={() => setFilter("active")} className="filter-button">
        Active
      </button>
      <button onClick={() => setFilter("completed")} className="filter-button">
        Completed
      </button>
    </div>
  );
}