import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./pages/test";
import { GlobalStyle } from "./components/style";
import Wheel from "./components/rouletteC";
import RecipeList from "./components/RecipeList";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/Wheel" element={<Wheel />} />
        <Route
          path="/recipt"
          element={<RecipeList Name="d" recipe="d" ingredient="s" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
