import React from "react";
import simCalculator from "../../assets/images/sim_Managment.svg";

function SimManagment() {
  return (
    <section data-aos="fade-left" className="max-w-screen-xl mx-auto py-16 px-6 font-sora">
      {/* Card Section */}
      <div className="bg-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start bg-amber-200">
          <img
            src={simCalculator}
            alt="SIM Management"
            className="w-64 h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col text-center md:text-left justify-center">
          <span className="text-lg text-[#455E86] font-medium uppercase">
            Easy SIM
          </span>
          <h3 className="text-5xl font-semibold text-gray-900">Management</h3>
          <p className="text-[#6B7280] text-lg mt-4 mb-6 max-w-md mx-auto md:mx-0">
            A single portal and API capabilities to manage all your Global IoT
            SIM Card deployments. Providing complete control over all aspects of
            connectivity.
          </p>

          <button
            className="self-center md:self-start inline-flex items-center justify-center 
             bg-[#455E86] hover:bg-[#3b5072] text-white font-medium text-sm 
             px-16 py-4 rounded-full transition 
             w-2xs cursor-pointer"
          >
            IoT SIM Management
          </button>
        </div>
      </div>
    </section>
  );
}

export default SimManagment;
