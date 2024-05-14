import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import GetIn from "./pages/GetIn";
const routes = (
  <Router>
    <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/getin" exact element={<GetIn />} />
    </Routes>
  </Router>
);
function App() {
  return <div>{routes}</div>;
}

export default App
