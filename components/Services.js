import React from "react";
import Image from "next/image";
import doctor from "../assests/images/doctor.jpg";
import hospital from "../assests/images/hospital.jpg";
import donate from "../assests/images/donate.jpg";

function Services() {
  return (
    <div className="flex space-x-12 py-7 px-2 pr-4 border-b">
      <div className="relative md:h-52 md:w-80 flex-shrink-0 h-80 w-80 p-3 -ml-3 cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <Image src={hospital} layout="fill" className=" rounded-xl  " />
        <div className="absolute top-32 left-12">
          <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
            Hospitals
          </button>
        </div>
      </div>

      <div className="relative md:h-52 md:w-80 flex-shrink-0 inline-block h-80 w-80 p-3 -ml-3 cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <Image src={doctor} layout="fill" className="rounded-xl " />
        <div className="absolute top-32 left-12">
          <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
            Doctors
          </button>
        </div>
      </div>

      <div className="relative md:h-52 md:w-80 flex-shrink-0 inline-block h-80 w-80 p-3 -ml-3 cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <Image src={donate} layout="fill" className=" rounded-xl " />
        <div className="absolute top-32 left-12">
          <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
