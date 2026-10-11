
function StudentList({ students, favoriteIds, onAddFavorite }) {
  return (
    <section>
      <div className="section-heading">
        <div>
          <h2>List of Students</h2>
          <p>Choose your favorite students from the list.</p>
        </div>

        <span className="total-badge">
          {students.length} Students
        </span>
      </div>

      <div className="student-grid">
        {students.map((student) => {
          const isFavorite = favoriteIds.includes(student.id);

          return (
            <article className="student-card" key={student.id}>
              <div className="student-top">
                <div className="avatar">
                  {student.name.charAt(0).toUpperCase()}
                </div>

                <span className="student-class">
                  {student.className}
                </span>
              </div>

              <h3>{student.name}</h3>
              <p className="roll-number">
                Roll No: {student.rollNo}
              </p>

              <button
                className={`action-button ${
                  isFavorite ? "added-button" : "add-button"
                }`}
                disabled={isFavorite}
                onClick={() => onAddFavorite(student.id)}
              >
                {isFavorite
                  ? "✓ Added to Favorites"
                  : "♡ Add to Favorite"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default StudentList;
