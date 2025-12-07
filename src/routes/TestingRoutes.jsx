import { Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Testing from "../pages/test/Testing";

export default function TestingRoutes() {
  return (
    <>
      <Route element={<MainLayout />}>
        <Route path="/testing" element={<Testing />} />
      </Route>
    </>
  );
}
