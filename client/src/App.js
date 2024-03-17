import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Components/Crud";
import Crud from "./Components/Crud";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Crud />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
