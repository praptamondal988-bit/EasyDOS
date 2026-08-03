import "./SearchBar.css";

function SearchBar() {
  return (
    <section className="search-section">

      <div className="search-box">

        <span className="search-icon">🔍</span>

        <input
          type="text"
          placeholder="Search videos, PDFs, quizzes, subjects..."
        />

        <button className="search-btn">
          Search
        </button>

      </div>

      <div className="search-tags">

        <span>Physics</span>

        <span>Chemistry</span>

        <span>Biology</span>

        <span>Higher Math</span>

        <span>ICT</span>

        <span>PDF</span>

        <span>Videos</span>

        <span>Quiz</span>

      </div>

    </section>
  );
}

export default SearchBar;