import React from "react";
import CustomButton from "../../Components/CustomButton/CustomButton";

const FeatureSection = ({
  // TEXT CONTENT
  title,
  subtitle,
  description,
  buttonText,

  // IMAGE CONTENT
  imageSrc,
  imageAlt,

  imageMaxWidth = "28rem", // ~448px default
  imageMaxHeight = "24rem", // ~384px default

  // CONFIG / LAYOUT
  reverse = false, // false = image left, true = image right
  bgColor = "white",
  rounded = "rounded-2xl",

  // ANIMATION
  aos = {
    type: "fade-up", // fade-up, fade-right, fade-left, zoom-in, etc.
    delay: 0, // optional: delay in ms
    duration: 800, // optional: duration in ms
  },

  // BUTTON COLORS
  btnBgColor = "#455E86",
  btnHoverColor = "#3b5072",
  btnTextColor = "white",
  subtitleColor = "#455E86",
}) => {
  return (
    <section
      data-aos={aos?.type}
      data-aos-delay={aos?.delay}
      data-aos-duration={aos?.duration}
      className="max-w-screen-xl mx-auto py-4 px-6 font-sora"
    >
      <div
        className={`bg-${bgColor} p-6 md:p-8 ${rounded} flex flex-col md:flex-row items-center justify-between gap-8 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE SIDE */}

        <div
          data-aos={reverse ? "fade-left" : "fade-right"}
 className="w-[20rem] h-[16rem] sm:w-[22rem] sm:h-[18rem] md:w-[24rem] md:h-[20rem] 
             flex items-center justify-center bg-white rounded-4xl py-2 px-6"
  style={{
    boxShadow: `0px 3px 80px ${btnBgColor}20`, // "40" adds ~25% opacity in hex
  }}        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-contain w-full h-full"
          />
        </div>

        {/* TEXT SIDE */}
        <div
          data-aos={reverse ? "fade-right" : "fade-left"}
          className="w-full md:w-1/2 flex flex-col text-center md:text-left justify-center "
        >
          {subtitle && (
            <span
              className="text-lg font-medium uppercase"
              style={{ color: subtitleColor }}
            >
              {subtitle}
            </span>
          )}
          {title && (
            <h3 className="text-5xl font-medium text-gray-900">{title}</h3>
          )}
          {description && (
            <p className="text-[#6B7280] text-lg mt-4 mb-6  md:mx-0">
              {description}
            </p>
          )}

          {buttonText && (
            <CustomButton
              text={buttonText}
              bgColor={btnBgColor}
              hoverColor={btnHoverColor}
              textColor={btnTextColor}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
