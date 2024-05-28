import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./pages/test";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
