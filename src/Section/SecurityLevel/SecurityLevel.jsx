import React from "react";
import security from "../../assets/images/security_level.svg";
import CustomButton from "../../Components/CustomButton/CustomButton";

function SecurityLevel() {
  return (
    <section className="max-w-screen-xl mx-auto py-16 px-6 font-sora flex flex-col md:flex-row items-center gap-12">
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col text-center md:text-left justify-center">
        <span className="text-lg text-[#F3C500] font-medium uppercase">
          Un Surpassed
        </span>
        <h3 className="text-5xl font-semibold text-gray-900">Security</h3>
        <p className="text-[#6B7280] text-lg mt-4 mb-6 max-w-md mx-auto md:mx-0">
          Protecting your IoT deployment and data through a variety of security
          features such as Private APN, VPN, Static IP’s, & IMEI Lock.
        </p>

        {/* Button - auto width */}

        {/* <button
          className="self-center md:self-start inline-flex items-center justify-center 
             bg-[#F3C500] hover:bg-[#e2b900] text-black font-medium text-sm 
             px-16 py-4 rounded-full transition 
             w-2xs cursor-pointer"
        >
          IMEI LOCK
        </button> */}
                    <CustomButton text="IMEI LOCK" />
        
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center bg-amber-700">
        <img src={security} alt="Security Level" className="w-64 h-96" />
      </div>
    </section>
  );
}

export default SecurityLevel;
