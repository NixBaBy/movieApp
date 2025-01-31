import * as React from "react";
import { Responce } from "@/utils/response";
import { MovieType } from "@/utils/types";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NowTrailer from "./NowTrailer";
import Link from "next/link";

export default async function NowPlaying() {
  const nowplaying = "/movie/now_playing?language=en-US&page=1";
  const data = await Responce(nowplaying);

  return (
    <Carousel className=" w-full h-full  mt-6">
      <CarouselContent className="">
        {data.results?.slice(0, 5).map((movie: MovieType, index: number) => {
          const imgUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
          return (
            <CarouselItem key={index}>
              <Link href={`/dynamic-detail/${movie.id}`}>
                <div
                  className="p-1 h-[600px] bg-cover bg-center flex relative"
                  style={{
                    backgroundImage: imgUrl ? `url(${imgUrl})` : undefined,
                  }}
                >
                  <div className="p-[8px] rounded-sm w-[404px] h-[300px] absolute top-[178px] left-[140px] ">
                    <div className="flex flex-col gap-4 justify-center ">
                      <div className="text-white">
                        <p className="text-[16px] ">Now Playing</p>
                        <p className="text-[36px] font-bold tracking-[-0.9px] ">
                          {movie?.original_title}
                        </p>
                      </div>
                      <div className="flex gap-2 items-center text-white text-[16px]">
                        <img src="./Vector.svg" alt="" className="h-[16px]" />
                        <div className="flex">
                          <p>{movie?.vote_average}</p>
                          <p>/10</p>
                        </div>
                      </div>
                      <div className="w-[302]">
                        <p className="text-white">
                          {movie?.overview.substr(0, 250)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="absolute bottom-[108px] left-[166px]">
                <NowTrailer id={movie.id} />
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[44px] w-[40px] h-[40px] py-[8px] px-[16px] border border-solid border-gray-200" />
      <CarouselNext className="absolute right-[44px] w-[40px] h-[40px] py-[8px] px-[16px] border border-solid border-gray-200" />
    </Carousel>
  );
}
