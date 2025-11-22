import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Loader from "../pages/Page-Loaders/Loader-1";

export default function MainRoutes() {
  return (
    <>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/Loader-1" element={<Loader />} />
    </>
  );
}
