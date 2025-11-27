import { Outlet } from "react-router-dom";
import Header from "../components/Headers/Header-1";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop-1";

export default function MainLayout() {
  return (
    <div className="bg-primary-dark text-secondary-white">
      <ScrollToTop />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
