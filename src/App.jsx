import LoginPage from "./Pages/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import RegisterPage from "./Pages/Register";
import DashboardPage from "./Pages/Dashboard";

function App() {
  return (
    <div className="bg-[#FFFDF3] font-[Lato]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/beranda" element={<DashboardPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
