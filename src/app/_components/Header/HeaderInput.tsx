"use client";
import { Input } from "@/components/ui/input";
import { Responce } from "@/utils/response";
import { MovieType } from "@/utils/types";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export const HeaderInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const genre = `/search/movie?query=${searchValue}&language=en-US`;
      const data = await Responce(genre);
      setData(data);
    };
    fetchData();
  }, [searchValue]);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLowerCase();
    setSearchValue(search);
  };
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <Input
            type="search"
            value={searchValue}
            onChange={searchHandler}
            placeholder="Search..."
            className="w-[379px] py-3 rounded-lg border-[1px] border-solid  "
          />
        </PopoverTrigger>
        <PopoverContent className="w-[577px]">
          <div className=" p-[8px] flex flex-col gap-[16px]">
            {data?.results.slice(0, 5).map((movie: MovieType) => {
              return (
                <div key={movie.id}>
                  <Link
                    href={`/dynamic-detail/${movie?.id}`}
                    key={movie.id}
                    className="flex border-b-[1px]-solid-black"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                      width={67}
                      height={100}
                      alt=""
                      className="rounded-md "
                    />

                    <div className="p-[8px] h-[100px] rounded-sm flex flex-col gap-[12px] ">
                      <p>{movie?.original_title}</p>
                      <div className="flex gap-2 items-center">
                        <img src="./Vector.png" alt="" className="h-[16px]" />
                        <p>{movie?.vote_average}</p>
                        <p>10</p>
                      </div>
                    </div>
                  </Link>
                  <div className="border-b-2 border-solid border-gray-200 w-full  mt-[8px]"></div>
                </div>
              );
            })}
            <Link href={`/search?searchvalue=${searchValue}`}>
              <div className="flex items-center gap-1">
                <p className="text-[#09090B] text-[14px] font-bold">
                  See all results for
                </p>
                <p>"{searchValue}"</p>
              </div>
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
