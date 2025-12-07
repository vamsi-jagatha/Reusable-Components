const ScrollMouse = ({
  sizeMobile = "h-8 w-2",
  sizeDesktop = "h-11 w-5",
  wheelMobile = "h-1.5 w-1",
  wheelDesktop = "h-3 w-1.5",
  borderColor = "border-white",
  wheelColor = "bg-white",
  text = "",
  textColor = "text-white",
  textClassName = "mt-3 text-xs md:text-sm font-medium",
  className = "",
}) => {
  return (
    <div
      className={`
        relative 
        flex flex-col items-center
        ${className}

        md:absolute md:bottom-12
        md:left-1/2 md:-translate-x-1/2
      `}
    >
      <div
        className={`
          border-2 ${borderColor}
          rounded-full
          flex justify-center
          animate-bounce
          ${sizeMobile} md:${sizeDesktop}
        `}
      >
        <div
          className={`
            ${wheelColor} rounded-full
            mt-1.5 md:mt-2
            ${wheelMobile} md:${wheelDesktop}
          `}
        ></div>
      </div>

      {text && <span className={`${textColor} ${textClassName}`}>{text}</span>}
    </div>
  );
};
export default ScrollMouse;
