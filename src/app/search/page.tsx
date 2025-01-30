"use client";

import { Responce } from "@/utils/response";
import { GenreType, MovieType } from "@/utils/types";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const value = searchParams.get("searchvalue");
  const [data, setData] = useState<any>(null);
  const [genre, setGenre] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const movie = `/search/movie?query=${value}&language=en-US`;
      const data = await Responce(movie);
      setData(data);
      const genre = "/genre/movie/list?language=en";
      const data1 = await Responce(genre);
      setGenre(data1);
    };
    fetchData();
  }, []);

  return (
    <div className="w-[58vw] m-auto ">
      <p>Search results</p>
      <p>. results for "{value}"</p>
      <div className="flex">
        <div className="flex flex-wrap mt-[32px] gap-[32px] w-[68%]">
          {data?.results.map((movie: MovieType, index: number) => {
            return (
              <Link href={`dynamic-detail/${movie?.id}`} key={index}>
                <div>
                  <div className="">
                    <Image
                      width={165}
                      height={244}
                      src={
                        "https://image.tmdb.org/t/p/w500/" + movie?.poster_path
                      }
                      alt=""
                    />
                    <div className="p-[8px] w-[165px] h-[79px]  bg-secondary ">
                      <div className="flex  items-center">
                        <div className="flex gap-2 items-center">
                          <img src="./Vector.png" alt="" className="h-[16px]" />
                          <p>{movie?.vote_average}</p>
                        </div>
                        <p>/10</p>
                      </div>
                      <p>{movie?.original_title}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div>
          <ToggleGroup
            type="multiple"
            className="flex flex-wrap gap-4 w-[400px] justify-start "
          >
            {genre?.genres.map((data: GenreType, index: number) => {
              return (
                <ToggleGroupItem value={data.id.toString()} key={index}>
                  <p className=" border border-solid border-[#27272A] rounded-full py-[2px] px-[10px] flex">
                    {data?.name}
                    <ChevronRight />
                  </p>
                </ToggleGroupItem>
              );
            })}
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
};

export default page;
