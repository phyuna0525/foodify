import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./pages/test";
import { GlobalStyle } from "./components/style";
import Wheel from "./components/rouletteC";
import RecipeList from "./components/RecipeList";
import Header from "./components/header";
import Sign from "./pages/signup";
import Login from "./pages/login";
import ReciptDetail from "./pages/recipt";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/sign" element={<Sign />} />
        <Route path="/" element={<Test />} />
        <Route path="/Wheel" element={<Wheel />} />
        <Route path="/recipt" element={<RecipeList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipt/:id" element={<ReciptDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
