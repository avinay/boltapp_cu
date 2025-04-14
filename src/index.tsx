import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MacbookAir } from "./screens/MacbookAir";
import { GeneratedQuestions } from "./screens/GeneratedQuestions";
import { QuestionSettings } from "./screens/QuestionSettings";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MacbookAir />} />
        <Route path="/generated-questions" element={<GeneratedQuestions />} />
        <Route path="/question-settings" element={<QuestionSettings />} />
      </Routes>
    </Router>
  </StrictMode>
);