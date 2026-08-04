import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (search.trim() === "") return;

    navigate(`/search?q=${encodeURIComponent(search)}`);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search subjects, chapters, videos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      <button onClick={handleSearch}>
        🔍
      </button>
    </div>
  );
}

export default SearchBar;