import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ClassPage from "./pages/ClassPage";
import SubjectPage from "./pages/SubjectPage";
import ChapterPage from "./pages/ChapterPage";
import LessonPage from "./pages/LessonPage";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route
        path="/class/:classId"
        element={<ClassPage />}
      />

      <Route
        path="/class/:classId/subject/:subjectName"
        element={<SubjectPage />}
      />

      <Route
        path="/class/:classId/subject/:subjectName/chapter/:chapterId"
        element={<ChapterPage />}
      />

      <Route
        path="/class/:classId/subject/:subjectName/chapter/:chapterId/lesson/:lessonId"
        element={<LessonPage />}
      />

    </Routes>
  );
}

export default App;