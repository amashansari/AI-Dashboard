import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomDashboard from "./Pages/Dashboard";
import CustomPageLayout from "./Pages/PageLayout";
import LogInPage from "./Pages/LogInPage";
import PrivateRoutes from "./Pages/utils/PrivateRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage />}></Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<CustomDashboard />}>
              <Route path="/dashboard" element={<CustomPageLayout />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
