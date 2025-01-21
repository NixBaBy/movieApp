import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-between w-[58vw] m-[auto] mt-[11.5px] items-center">
      <div className="flex gap-2 ">
        <img src="./film.png" alt="" />
        <p className="text-[#4338CA] text-[16px] font-bold tracking-[0.32px]">
          Movie Z
        </p>
      </div>
      <div className="flex gap-3">
        <select
          name="Genre"
          id=""
          className="w-[97px]  px-[16px] py-[8px] rounded-md border-[1px] border-solid border-[#27272A] bg-[#09090B] shadow-[0px 1px 2px 0px rgba(0, 0, 0, 0.05)] flex justify-center items-center "
        >
          <option value="" className="text-[#FAFAFA] text-[14px] ">
            Genre
          </option>
        </select>
        <input
          type="text"
          placeholder="Search..."
          className="w-[379px] py-3 rounded-lg border-[1px] border-solid border-[#27272A] bg-[#09090B]"
        />
      </div>
      <div>
        <img src="./Modes.png" alt="" />
      </div>
    </div>
  );
};
