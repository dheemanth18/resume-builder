import "./App.css";
import { Home, Build } from "./Pages/export.helper";
import {
  Basic,
  Education,
  Work,
  Skill,
  Award
} from "./Components/Tabs/export.tab.helper";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/personal" element={<Basic />} />
          <Route path="/education" element={<Education />} />
          <Route path="/work" element={<Work />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/award" element={<Award />} />
          <Route path="/resume" element={<Build/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
