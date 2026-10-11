
function Navbar({
  activePage,
  setActivePage,
  studentCount,
  favoriteCount,
}) {
  return (
    <nav className="navbar">
      <button
        className={`nav-button ${
          activePage === "students" ? "active" : ""
        }`}
        onClick={() => setActivePage("students")}
      >
        👥 List of Students
        <span className="nav-count">{studentCount}</span>
      </button>

      <button
        className={`nav-button ${
          activePage === "favorites" ? "active" : ""
        }`}
        onClick={() => setActivePage("favorites")}
      >
        ❤️ Favorite Students
        <span className="nav-count">{favoriteCount}</span>
      </button>
    </nav>
  );
}

export default Navbar;
