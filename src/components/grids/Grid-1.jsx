import React from "react";

const BentoGrid = ({ items = [] }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[150px]">
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-4 rounded-xl shadow-md bg-white border
            ${item.colSpan ? `col-span-${item.colSpan}` : ""}
            ${item.rowSpan ? `row-span-${item.rowSpan}` : ""}
          `}
        >
          {item.content}
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
