// DriftButton

const Button = ({
  label = "Explore More",
  onClick,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  buttonClass = "",
  labelClass = "",
  iconWrapperClass = "",
  iconSize = 18,
  shiftOnHover = "translate-x-2",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        group
        inline-flex items-center
        w-max
        cursor-pointer
        focus:outline-none
        transition-transform duration-300 ease-out
        group-hover:${shiftOnHover}
        ${buttonClass}
      `}
    >
      {/* Left Icon — grows in */}
      {LeftIcon && (
        <span
          className={`
            flex items-center justify-center
            overflow-hidden
            w-0 h-0 opacity-0
            transition-all duration-300 ease-out
            group-hover:w-9 group-hover:h-9 group-hover:opacity-100
            ${iconWrapperClass}
          `}
          aria-hidden
        >
          <LeftIcon size={iconSize} />
        </span>
      )}

      {/* Label */}
      <span
        className={`
          transition-colors duration-300
          ${labelClass}
        `}
      >
        {label}
      </span>

      {/* Right Icon — shrinks out */}
      {RightIcon && (
        <span
          className={`
            flex items-center justify-center
            overflow-hidden
            w-9 h-9 opacity-100
            transition-all duration-300 ease-out
            group-hover:w-0 group-hover:h-0 group-hover:opacity-0
            ${iconWrapperClass}
          `}
          aria-hidden
        >
          <RightIcon size={iconSize} />
        </span>
      )}
    </button>
  );
};

export default Button;
