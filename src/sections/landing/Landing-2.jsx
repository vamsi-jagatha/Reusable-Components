import React from "react";
import Beam from "../../components/sunlight/Beam-1";
import Button from "../../components/Buttons/Button-3";
import { ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden px-4 flex flex-col items-center text-center">
      <Beam />
      <div>
        <h1 className="text-5xl md:text-6xl  pt-40 font-ragnear font-bold">
          Deploy anything or anything, anywhere.
        </h1>
        <p className=" mt-4 text-md md:text-lg text-gray-700">
          Launch apps, storage, and GPU workloads in any cloud account with a
          few clicks.
        </p>
      </div>
      <Button
        className="mt-8"
        icon={<ArrowRight className="w-4 h-4" />}
        hoverIcon={<ArrowRight className="w-4 h-4" />}
        rounded="full"
      >
        Get Started for Free
      </Button>
    </div>
  );
};

export default Landing;
