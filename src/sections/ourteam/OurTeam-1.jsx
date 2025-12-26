import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TeamCard from "../../components/teamcard/TeamCard-1";

gsap.registerPlugin(useGSAP);

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200",
  },
  {
    id: 2,
    name: "John Smith",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200",
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1200",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1614289371518-722f2615943d?q=80&w=1200",
  },
];

const OurTeam = () => {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: `-${totalWidth}`,
      duration: 25,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });
  });

  return (
    <section className="py-16 overflow-hidden">
      {/* Heading */}
      <div className="mb-10 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">Meet Our Team</h2>
        <p className="mt-2 text-gray-500">
          The people who turn ideas into reality
        </p>
      </div>

      {/* Infinite Scroll Wrapper */}
      <div className="relative overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 w-max"
          onMouseEnter={() => tweenRef.current?.pause()}
          onMouseLeave={() => tweenRef.current?.resume()}
        >
          {[...TEAM_MEMBERS, ...TEAM_MEMBERS].map((member, index) => (
            <TeamCard
              key={`${member.id}-${index}`}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
