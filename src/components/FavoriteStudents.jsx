
function FavoriteStudents({ students, onRemoveFavorite }) {
  return (
    <section>
      <div className="section-heading">
        <div>
          <h2>Favorite Students ❤️</h2>
          <p>Your selected students appear here.</p>
        </div>

        <span className="total-badge">
          {students.length} Favorites
        </span>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">💙</div>
          <h3>No favorite students yet!</h3>
          <p>
            Visit List of Students and add your favorite students.
          </p>
        </div>
      ) : (
        <div className="student-grid">
          {students.map((student) => (
            <article className="student-card favorite-card" key={student.id}>
              <div className="student-top">
                <div className="avatar favorite-avatar">
                  {student.name.charAt(0).toUpperCase()}
                </div>

                <span className="favorite-label">♥ Favorite</span>
              </div>

              <h3>{student.name}</h3>
              <p className="roll-number">
                Roll No: {student.rollNo}
              </p>
              <p className="student-class-text">
                {student.className}
              </p>

              <button
                className="action-button remove-button"
                onClick={() => onRemoveFavorite(student.id)}
              >
                ✕ Remove
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default FavoriteStudents;
