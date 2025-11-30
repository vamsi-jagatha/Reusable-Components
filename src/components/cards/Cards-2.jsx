// components/Card.jsx
import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800/60 hover:border-blue-500/40 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-2 text-blue-550">{title}</h3>
      <p className="text-gray-700">{children}</p>
    </div>
  );
};

export default Card;
