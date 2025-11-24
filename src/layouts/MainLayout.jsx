import { Outlet } from "react-router-dom";
import Header from "../components/Headers/Header-1";
import logoImg from "../assets/images/logo.png";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop-1";

export default function MainLayout() {
  return (
    <div className="bg-primary-dark text-secondary-white">
      <Header
        logo={logoImg}
        navItems={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <ScrollToTop />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
