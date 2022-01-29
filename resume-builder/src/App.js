import './App.css';
import {Home} from './Pages/export.helper'
import {Basic, Education, Work} from './Components/Form/Tabs/export.tab.helper'
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/personal" element={<Basic/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/work" element={<Work/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
