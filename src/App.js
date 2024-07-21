import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomDashboard from "./Pages/Dashboard";
import CustomPageLayout from "./Pages/PageLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CustomDashboard />}>
            <Route path="/" element={<CustomPageLayout />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
