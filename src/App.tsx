import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cv" element={<></>} />
        <Route path="/projects/:id" element={<></>} />
        <Route path="/contacts" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
