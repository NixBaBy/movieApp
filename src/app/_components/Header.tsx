import { Input } from "@/components/ui/input";
import ThemeToggle from "@/components/ui/them-toggle";
import { Responce } from "@/utils/response";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { GenreType } from "@/utils/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Header() {
  const genre = "/genre/movie/list?language=en";
  const data = await Responce(genre);
  console.log(data);
  return (
    <div className="sticky top-0 z-20 bg-background">
      <div className="flex justify-between w-[58vw] h-[59px] m-[auto] mt-[11.5px] items-center flex-wrap">
        <Link href="/">
          <div className="flex gap-2 ">
            <img src="./film.png" alt="" />
            <p className="text-[#4338CA] text-[16px] font-bold tracking-[0.32px]">
              Movie Z
            </p>
          </div>
        </Link>
        <div className="flex gap-3 flex-wrap">
          <Popover>
            <PopoverTrigger className="w-[94px]   border-solid border border-[#E4E4E7] rounded-[8px] flex justify-center items-center gap-[8px]">
              <ChevronDown className="w-[16px] " />
              <p> Genre</p>
            </PopoverTrigger>
            <PopoverContent className="w-[577px]">
              <p>Genres</p>
              <p>See lists of movies by genre aa</p>
              <div className="w-full h-[1px] bg-[#27272A] my-[20px]"></div>
              <div className="flex flex-wrap gap-4">
                {data.genres.map((data: GenreType, index: number) => {
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      className=" border border-solid border-[#27272A] rounded-full py-[2px] px-[10px] flex"
                    >
                      {data?.name}
                      <ChevronRight />
                    </Button>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover>
          <Input
            type="text"
            placeholder="Search..."
            className="w-[379px] py-3 rounded-lg border-[1px] border-solid  "
          />
        </div>
        <div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
