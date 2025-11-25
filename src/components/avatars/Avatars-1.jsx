import React from "react";

const Avatars = () => {
  const avatars = [
    "https://randomuser.me/api/portraits/thumb/women/75.jpg",
    "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    "https://randomuser.me/api/portraits/thumb/women/75.jpg",
    "https://randomuser.me/api/portraits/thumb/men/75.jpg",
    "https://randomuser.me/api/portraits/thumb/women/75.jpg",
  ];

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex items-center -space-x-3">
        {avatars.map((src, i) => (
          <div
            key={i}
            className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full ring ring-white overflow-hidden transition-transform duration-300 ease-in-out hover:scale-125 hover:z-50"
          >
            <img
              className="h-full w-full rounded-full object-cover"
              src={src}
              alt="avatar"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avatars;
