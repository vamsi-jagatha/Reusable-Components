import { BrowserRouter, Routes } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
// import AdminRoutes from "./routes/AdminRoutes";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {MainRoutes()}
        {/* {AdminRoutes()} */}
      </Routes>
    </BrowserRouter>
  );
}
