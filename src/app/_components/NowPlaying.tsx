import * as React from "react";
import { Responce } from "@/utils/response";
import { Card, CardContent } from "@/components/ui/card";
import { MovieType } from "@/utils/types";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Play } from "lucide-react";

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
              <div
                className="p-1 h-[600px] bg-cover bg-center flex relative"
                style={{
                  backgroundImage: imgUrl ? `url(${imgUrl})` : undefined,
                }}
              >
                <div className="p-[8px] w-[229px] h-[79px] rounded-sm w-[404px] h-[300px] absolute top-[178px] left-[140px]">
                  <div className="flex flex-col gap-4 justify-center ">
                    <div className="text-white">
                      <p className="text-[16px] ">Now Playing</p>
                      <p className="text-[36px] font-bold tracking-[-0.9px] ">
                        {movie?.original_title}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center text-white text-[16px]">
                      <img src="./Vector.png" alt="" className="h-[16px]" />
                      <div className="flex">
                        <p>{movie?.vote_average}</p>
                        <p>/10</p>
                      </div>
                    </div>
                    <div className="w-[302]">
                      <p className="text-white"> {movie?.overview}</p>
                    </div>
                    <Button
                      variant="outline"
                      className="py-[8px] px-[16px] w-[145px]"
                    >
                      <Play />
                      Watch Trailer
                    </Button>
                  </div>
                </div>
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
