import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/them-toggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { ChevronDown } from "lucide-react";

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
        <Popover>
          <PopoverTrigger className="w-[94px] h-[36px]  border-solid border border-[#E4E4E7] rounded-[8px] flex justify-center items-center gap-[8px]">
            <ChevronDown className="w-[16px] h-[16px]" />
            <p> Genre</p>
          </PopoverTrigger>
          <PopoverContent className="w-[577px]">
            <p>Genres</p>
            <p>See lists of movies by genre</p>
          </PopoverContent>
        </Popover>
        <Input
          type="text"
          placeholder="Search..."
          className="w-[379px] py-3 rounded-lg border-[1px] border-solid  "
        />
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};
