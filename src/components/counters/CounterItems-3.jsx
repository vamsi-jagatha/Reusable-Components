import React from "react";
import Button from "../../components/buttons/Button-2";
import imageSrc from "../../../public/svgs/main-logo.svg";

const counterItems = [
  { count: "150K", title: "Users", plus: true },
  { count: "75K", title: "Downloads", plus: false },
  { count: "1.2M", title: "Visits", plus: false },
];

const CounterItems = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <div className="relative bg-gray-800/30 p-10 h-90 w-[90vw] md:w-[60vw] mx-auto rounded-4xl shadow-lg flex flex-col items-center justify-center space-y-3">
          <div className="absolute -top-8 left-1/2 inset-x-0 -translate-x-1/2 flex items-center justify-center h-16 w-16 bg-gray-350 rounded-2xl">
            <img src={imageSrc} alt="Logo" className="h-10 w-10 rounded-2xl" />
          </div>
          <h2 className="text-4xl font-bold font-mono">Testing Page</h2>
          <p className="text-lg text-center max-w-md">
            This is a test page for layout and styling. You can use this page to
            test your layout and styling.{" "}
          </p>
          <div className="flex items-center space-x-6 mt-6">
            {counterItems.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <span className="text-2xl font-bold flex items-center ">
                    {item.count}{" "}
                    {item.plus && <span className="text-green-500">+</span>}
                  </span>
                  <span className="text-sm">{item.title}</span>
                </div>
                <div className="h-1.5 w-1.5 bg-gray-600 rounded-full last:hidden"></div>
              </>
            ))}
          </div>
          <Button label="Get Started" hoverLabel="Get Started" />
        </div>
      </section>
    </>
  );
};

export default CounterItems;
