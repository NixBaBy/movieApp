"use client";
import { Input } from "@/components/ui/input";
import { Responce } from "@/utils/response";
import { GenreFilterType, MovieType } from "@/utils/types";
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
  const [data, setData] = useState<GenreFilterType | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const genre = `/search/movie?query=${searchValue}&language=en-US`;
      const data = await Responce(genre);
      setData(data);
    };
    fetchData();
  }, [searchValue]);

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Input
            type="text"
            placeholder="Search movies..."
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              setOpen(e.target.value.length > 0);
            }}
            onFocus={() => setOpen(true)}
            className="w-[379px] px-[12px] "
          />
        </PopoverTrigger>
        {open && searchValue.length > 0 && (
          <PopoverContent
            className="w-[577px]"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <div className="p-[8px] flex flex-col gap-[16px]">
              {data?.results?.slice(0, 5).map((movie: MovieType) => (
                <div key={movie.id}>
                  <Link
                    href={`/dynamic-detail/${movie?.id}`}
                    className="flex border-b-[1px]-solid-black"
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                      width={67}
                      height={100}
                      alt={movie?.original_title}
                      className="rounded-md"
                    />
                    <div className="p-[8px] h-[100px] rounded-sm flex flex-col gap-[12px]">
                      <p>{movie?.original_title}</p>
                      <div className="flex gap-2 items-center">
                        <Image src="/star.svg" alt="" width={16} height={16} />
                        <p>{movie?.vote_average}</p>
                        <p>10</p>
                      </div>
                    </div>
                  </Link>
                  <div className="border-b-2 border-solid border-gray-200 w-full mt-[8px]"></div>
                </div>
              ))}
              {searchValue && (
                <Link href={`/search?searchvalue=${searchValue}`}>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <p className="text-[14px] font-bold">See all results for</p>
                    <p>&ldquo;{searchValue}&ldquo;</p>
                  </div>
                </Link>
              )}
            </div>
          </PopoverContent>
        )}
      </Popover>
    </div>
  );
};
