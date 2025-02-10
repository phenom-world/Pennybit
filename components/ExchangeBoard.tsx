import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BiTransferAlt } from "react-icons/bi";

const ExchangeBoard = () => {
  return (
    <div>
      <form action="">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-4 md:gap-6 bg-[#E3F2FD] rounded-xl mb-6 py-8 md:py-12 px-4 md:px-6">
          <div className="w-full md:w-auto">
            <p className="text-xs md:text-sm pb-1">From</p>
            <div className="bg-white h-[45px] md:h-[50px] rounded-md w-full flex justify-between items-center">
              <input
                type="text"
                placeholder="100"
                className="px-2 md:px-3 focus:outline-none w-[70%] text-sm md:text-base"
              />
              <select
                name=""
                id=""
                className="px-2 md:px-3 focus:outline-none w-[30%] bg-light-orange mr-1 py-1.5 md:py-2 rounded-md text-orange text-[10px] md:text-xs"
              >
                <option value="">BTC</option>
              </select>
            </div>
          </div>
          <div className="bg-orange p-1.5 md:p-2 rounded-full">
            <BiTransferAlt className="text-xl md:text-2xl text-white" />
          </div>
          <div className="w-full md:w-auto">
            <p className="text-xs md:text-sm pb-1">To</p>
            <div className="bg-white h-[45px] md:h-[50px] rounded-md w-full flex justify-between items-center">
              <input
                type="text"
                placeholder="32,000,000"
                className="px-2 md:px-3 focus:outline-none w-[70%] text-sm md:text-base"
              />
              <select
                name=""
                id=""
                className="px-2 md:px-3 focus:outline-none w-[30%] bg-[#FBE3FD] mr-1 py-1.5 md:py-2 rounded-md text-[#E600FF] text-[10px] md:text-xs"
              >
                <option value="">NGN</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="bg-orange flex justify-center items-center gap-3 md:gap-4 py-1.5 md:py-2 px-4 md:px-5 rounded-md text-white text-sm md:text-base">
            <p>Exchange</p>
            <BsArrowRight />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExchangeBoard;
