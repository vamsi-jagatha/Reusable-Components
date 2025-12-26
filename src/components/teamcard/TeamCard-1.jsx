import React from "react";

const TeamCard = ({
  name = "Jane Doe",
  role = "Lead Developer",
  image = "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200",
  className = "",
  imageClassName = "",
  contentClassName = "",
}) => {
  return (
    <div
      className={`
        group relative
        w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]
        bg-purple-700/30
        rounded-2xl
        cursor-pointer
        overflow-hidden
        shadow-lg
        p-1.5
        transition-transform duration-300
        hover:-translate-y-1
        ${className}
      `}
    >
      <div className="relative overflow-hidden rounded-2xl">
        {/* Image */}
        <img
          src={image}
          alt={name}
          className={`
            w-full h-60 sm:h-[260px] lg:h-[300px]
            object-cover
            rounded-2xl
            grayscale
            transition-all duration-500
            group-hover:scale-105 group-hover:grayscale-0
            ${imageClassName}
          `}
        />

        {/* Content */}
        <div
          className={`
            absolute bottom-1.5 left-1.5 right-1.5
            rounded-xl
            bg-white/95 backdrop-blur-sm
            p-3
            sm:p-4
            transition-transform duration-300
            md:translate-y-full
            group-hover:translate-y-0
            ${contentClassName}
          `}
        >
          <h5 className="font-semibold text-black sm:text-lg">{name}</h5>
          <p className="text-sm  text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
