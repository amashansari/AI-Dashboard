import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomDashboard from "./Pages/Dashboard";
import CustomCode from "./Components/Code";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomDashboard />}>
            <Route path="code" element={<CustomCode />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
