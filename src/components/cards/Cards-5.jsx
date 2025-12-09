import React from "react";

const Cards = ({
  icon: Icon,
  sideIcon: SideIcon,
  sideIconLink = "#",
  title,
  description,
  textColor = "text-white",
  bgColor = "bg-purple-500/70",
  hoverColor = "hover:bg-purple-600",
}) => {
  return (
    <div
      className={`w-full p-4 md:py-6 rounded-2xl transition-all duration-300  ${bgColor} ${hoverColor}`}
    >
      <div className="flex justify-between items-start">
        {Icon && <Icon className={`text-3xl ${textColor}`} size={45} />}

        {SideIcon && (
          <a
            href={sideIconLink}
            className="inline-block cursor-pointer"
            target="_self"
          >
            <SideIcon
              className={`${textColor} rotate-45 transition-transform duration-300 hover:rotate-90`}
              size={24}
            />
          </a>
        )}
      </div>

      <div className="mt-20">
        <h1 className={`text-lg font-semibold ${textColor}`}>{title}</h1>
        <p className={`font-light text-sm ${textColor}`}>{description}</p>
      </div>
    </div>
  );
};

export default Cards;
