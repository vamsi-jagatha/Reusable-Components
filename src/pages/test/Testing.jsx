import Sidebar from "../../components/sidebars/Sidebar-1";
import { Home, Users, Settings } from "lucide-react";
import Timeline from "../../components/timelines/Timeline-2";

const Testing = () => {
  return (
    <>
      <section className="h-full  ">
        <Timeline
          theme={{
            heading: "text-white",
            intro: "text-gray-300",
            period: "text-white",
            role: "text-purple-400",
            description: "text-gray-400",
            baseLine: "bg-gray-700",
            progressLine: "bg-purple-500",
            sectionBg: "bg-black",
          }}
        />
      </section>
    </>
  );
};

export default Testing;
