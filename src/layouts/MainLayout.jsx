import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <main className="bg-primary-dark text-secondary-white">
        <div className="p-4">
          <Outlet /> {/* Renders child routes */}
        </div>
      </main>
    </div>
  );
}
