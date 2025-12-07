import React from "react";
import Beam from "../../components/sunlight/Beam-1";
import Button from "../../components/Buttons/Button-3";
import { ArrowRight } from "lucide-react";
import Header from "../../components/Headers/Header-2";
// import CounterItem from "../../components/counters/CounterItems-2";
import CounterSection from "../../components/counters/CounterSection-1";

const Landing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden px-4 flex flex-col items-center text-center">
      <Header
        className=""
        fixed={true}
        itemColor="text-white"
        logoColor="text-purple-500"
        logoHoverColor="hover:text-purple-700"
        logoSize="w-10 h-10"
        hoverTextColor="hover:text-purple-700"
        animateLogo={true}
        menuItems={[
          { label: "Home", href: "#home" },
          { label: "Docs", href: "#docs" },
          { label: "Components", href: "#components" },
        ]}
      />

      <Beam className="opacity-70" />
      <div>
        <h1 className="text-5xl md:text-6xl max-w-6xl  pt-54 font-ragnear font-bold">
          Deploy anything, anywhere
          <div className=" inline-block">—with zero-friction.</div>
        </h1>
        <p className=" mt-4 text-md max-w-4xl md:text-lg text-gray-700">
          Launch apps, storage, and GPU workloads in any cloud with just a few
          clicks. Scale instantly and manage everything through one streamlined,
          unified platform.
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
      <CounterSection
        items={[
          {
            label: "Tasks Completed",
            value: 6383,
            fontSize: 25,
            width: 12,
            duration: 2000,
            plus: true,
          },
          {
            label: "Active Users",
            fontSize: 25,
            width: 12,
            value: 12450,
            plus: true,
            duration: 2000,
          },
          {
            plus: true,
            label: "Projects",
            value: 289,
            width: 12,
            fontSize: 25,
            duration: 2000,
          },
          {
            label: "Deployments",
            plus: true,
            fontSize: 25,
            width: 12,
            value: 762,
            duration: 2000,
          },
          {
            label: "Uptime (%)",
            value: 99,
            plus: false,
            fontSize: 25,
            width: 12,
            duration: 2000,
          },
        ]}
      />
    </div>
  );
};

export default Landing;
