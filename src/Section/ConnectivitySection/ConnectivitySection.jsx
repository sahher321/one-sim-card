import React from "react";
import simCards from "../../assets/images/sim_cards.png";
import arrow from "../../assets/images/stats arriw.svg";

export default function ConnectivitySection() {
  return (
    <section
      data-aos="zoom-in"
      className="max-w-screen-2xl mx-auto py-20 px-4 md:px-8 font-sora"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-6xl font-thin text-[#08080C] text-center mb-16 leading-tight">
        Elevate Your Connectivity <br className="hidden md:block" />
        with OneSIMCard
      </h2>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
        {/* LEFT COLUMN (3 cols on large) */}
        <div className="lg:col-span-3 flex flex-col gap-24 text-center lg:text-left ">
          {/* Box 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 md:mr-14">
            <h4 className="text-lg md:text-2xl font-medium text-[#08080C] mb-2">
              Scalable Solutions
            </h4>
            <p className="text-[#6B7280] text-lg md:text-base">
              Step into a world where IoT connectivity meets unparalleled
              flexibility, tailored for projects of any size.
            </p>
          </div>

          {/* Box 2 */}
          <div>
            <h4 className="text-lg md:text-2xl font-medium text-[#08080C] mb-2">
              Worldwide Access
            </h4>
            <p className="text-[#6B7280] text-lg md:text-base">
              Seamlessly connect your IoT devices with our multi-network roaming
              and global coverage in over 200 countries.
            </p>
            <button className="text-[#F4C600] font-medium text-sm ">
              Learn More
            </button>
          </div>
        </div>

        {/* CENTER IMAGE (6 cols on large) */}
        <div className="lg:col-span-6 flex justify-center">
          <img
            src={simCards}
            alt="OneSIMCard 5G"
            className="w-full h-auto max-w-full object-contain drop-shadow-xl"
          />
        </div>

        {/* RIGHT COLUMN (3 cols on large) */}
        <div className="lg:col-span-3 flex flex-col gap-8 text-center lg:text-left ">
          {/* Box 1 */}
          <div>
            <span className="inline-flex items-center gap-2 text-sm text-gray-500 mb-1">
              <span className="border-2 border-[#6B7280] text-[#455E86] px-2 py-1 rounded-full">
                Stats
              </span>
              <img src={arrow} alt="info icon" className="w-7 h-7" />
            </span>
            <h4 className="text-lg md:text-2xl font-medium text-[#08080C] mb-2">
              Multi-IMSI Technology | Superior Reliability
            </h4>
            <p className="text-[#6B7280] text-lg md:text-base">
              Leverage No Steering IoT SIMs for ultimate network redundancy.
              Automatically switch to the strongest available local network for
              maximum uptime and reliability.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 md:mr-14">
            <h4 className="text-lg md:text-2xl font-medium text-[#08080C] mb-2">
              200+ Countries | 99% Uptime
            </h4>
            <p className="text-[#6B7280] text-lg md:text-base">
              Choose from flexible plans and customized solutions that fit your
              business needs perfectly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
