import React from "react";
import worldMap from "../../assets/images/World_map.svg"; // replace with your map image path
import CustomButton from "../../Components/CustomButton/CustomButton";

function IoTSimSection() {
  return (
    <section data-aos="fade-down" className="max-w-screen-xl mx-auto py-16 font-sora ">
      {/* Header Section */}
      <div className="text-center md:text-left">
        <p className="text-6xl font-thin text-[#08080C] ">IoT SIM Card</p>
        <p className="text-[#08080C] mt-2 font-medium text-2xl ml-1">
          IoT SIM Card For Global Connectivity | Secure M2M & Prepaid IoT SIM
          Plans
        </p>
        <hr className="border-gray-300 my-6" />
      </div>

      {/* Description */}
      <p className="text-[#6B7280] font-regular text-lg leading-relaxed mb-12 text-center md:text-left pr-2 md:pr-96">
        With a focus on worldwide M2M roaming, network redundancy in most
        countries, secure connectivity and intelligent pricing by application,{" "}
        <span className="text-[#455E86] font-semibold">OneSimCard IoT</span>{" "}
        provides an outstanding value proposition and truly is the chosen
        alternative IoT SIM card service provider.
      </p>

      {/* Card Section */}
      <div className="bg-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start bg-white shadow-lg p-3 rounded-4xl">
          <img
            src={worldMap}
            alt="SIM Management"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col text-center md:text-left justify-center">
          <span className="text-lg text-[#455E86] font-medium uppercase">
            Global
          </span>
          <h3 className="text-5xl font-medium text-gray-900">Coverage</h3>
          <p className="text-[#6B7280] text-lg mt-2 mb-4 max-w-md mx-auto md:mx-0">
            OneSimCard gives you the world in the palm of your hand — providing
            global connectivity IoT SIM card solutions in over 200 countries
            worldwide.
          </p>
          <CustomButton
            text="Global IoT"
            bgColor="#455E86"
            hoverColor="#3b5072"
            textColor="white"
          />
        </div>
      </div>
    </section>
  );
}

export default IoTSimSection;
