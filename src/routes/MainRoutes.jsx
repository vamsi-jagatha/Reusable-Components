import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home1 from "../pages/Home/Home-1";
import Home2 from "../pages/Home/Home-2";

export default function MainRoutes() {
  return (
    <>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home1 />} />
        <Route path="/home-2" element={<Home2 />} />
      </Route>
    </>
  );
}
