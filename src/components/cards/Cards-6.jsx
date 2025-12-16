import React from "react";

const Card = ({
  image,
  title,
  description,
  tags = [],

  // container
  cardBg = "bg-white",
  cardClass = "",

  // image
  imageClass = "w-full h-48 object-cover",

  // text
  titleClass = "text-xl font-bold text-gray-900",
  descriptionClass = "text-base text-gray-700",

  // tags
  tagClass = "bg-gray-200 text-gray-700",
}) => {
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg ${cardBg} ${cardClass}`}
    >
      {image && <img src={image} alt={title} className={imageClass} />}

      <div className="px-6 py-4">
        <div className={`mb-2 ${titleClass}`}>{title}</div>
        <p className={descriptionClass}>{description}</p>
      </div>

      {tags.length > 0 && (
        <div className="px-6 pt-4 pb-2 flex flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 ${tagClass}`}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
