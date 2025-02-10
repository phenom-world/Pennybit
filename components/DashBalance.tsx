import React from "react";
import { FiSend, FiArrowDown, FiPlus } from "react-icons/fi";

const DashBalance = () => {
  return (
    <div className="border-2 border-orange rounded-xl mb-6 flex flex-col justify-center items-center py-6 md:py-10 px-4">
      <p className="text-sm md:text-base">Wallet Balance</p>
      <div className="flex items-end gap-2 md:gap-3 mb-6 md:mb-10">
        <p className="text-3xl md:text-6xl font-bold text-orange">$40,000</p>
        <div className="flex items-center gap-1 md:gap-2 bg-light-orange text-orange text-[10px] md:text-xs p-1 rounded-lg">
          <FiArrowDown className="bg-orange text-white rounded-full" />
          <p>20%</p>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-20 w-full justify-center">
        <div className="flex items-center gap-2 bg-orange text-white cursor-pointer py-2 px-4 md:px-8 rounded-full text-sm md:text-base">
          <FiPlus />
          <p>Fund</p>
        </div>
        <div className="flex items-center gap-2 border-2 border-orange text-orange cursor-pointer py-2 px-4 md:px-8 rounded-full text-sm md:text-base">
          <FiSend />
          <p>Send</p>
        </div>
      </div>
    </div>
  );
};

export default DashBalance;
