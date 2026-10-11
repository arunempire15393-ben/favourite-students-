 
import { useState } from "react";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import FavoriteStudents from "./components/FavoriteStudents";
import "./index.css";

const initialStudents = [
  { id: 1, name: "Arun Kumar", rollNo: "STU001", className: "EMC" },
  { id: 2, name: "Priya Sharma", rollNo: "STU002", className: "EMC" },
  { id: 3, name: "Rahul Raj", rollNo: "STU003", className: "EMC" },
  { id: 4, name: "Divya S", rollNo: "STU004", className: "EMC" },
  { id: 5, name: "Kavin Kumar", rollNo: "STU005", className: "EMC" },
  { id: 6, name: "Nithya R", rollNo: "STU006", className: "EMC" },
  { id: 7, name: "Santhosh M", rollNo: "STU007", className: "EMC" },
  { id: 8, name: "Keerthana P", rollNo: "STU008", className: "EMC" },
];

function App() {
  const [students] = useState(initialStudents);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [activePage, setActivePage] = useState("students");

  function addToFavorite(studentId) {
    setFavoriteIds((previousIds) => { 
      if (previousIds.includes(studentId)) {
        return previousIds;
      }

      return [...previousIds, studentId];
    });
  }

  function removeFavorite(studentId) {
    setFavoriteIds((previousIds) =>
      previousIds.filter((id) => id !== studentId)
    );
  }

  const favoriteStudents = students.filter((student) =>
    favoriteIds.includes(student.id)
  );

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-content">
          <span className="hero-label">STUDENT MANAGEMENT</span>
          <h1>Student Hub 🎓</h1>
          <p>Manage your students and save your favorites.</p>
        </div>
      </header>

      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        studentCount={students.length}
        favoriteCount={favoriteStudents.length}
      />

      <main className="main-content">
        {activePage === "students" ? (
          <StudentList
            students={students}
            favoriteIds={favoriteIds}
            onAddFavorite={addToFavorite}
          />
        ) : (
          <FavoriteStudents
            students={favoriteStudents}
            onRemoveFavorite={removeFavorite}
          />
        )}
      </main>

      <footer className="footer">
         | Student Hub ❤️ |
      </footer>
    </div>
  );
}

export default App;
