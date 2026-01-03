import React from "react";
import Sidebar from "../../components/sidebars/Sidebar-1";

const Docs = () => {
  return (
    <div className="relative min-h-screen flex">
      <Sidebar />
      <div className="ml-64">
        <h2>Docs</h2>
      </div>
    </div>
  );
};

export default Docs;
