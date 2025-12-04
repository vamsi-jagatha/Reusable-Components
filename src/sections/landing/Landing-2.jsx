import React from "react";
import Beam from "../../components/sunlight/Beam-1";

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Beam />
      <h1 className="text-6xl text-center pt-40 font-ragnear font-bold">
        Deploy anything or anything, anywhere.
      </h1>
      <p className="text-center mt-4 text-lg text-gray-700">
        Launch apps, storage, and GPU workloads in any cloud account with a few
        clicks.
      </p>
    </div>
  );
};

export default Landing;
