import * as React from "react";
import { Responce } from "@/utils/response";
import { Card, CardContent } from "@/components/ui/card";
import { MovieType } from "@/utils/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default async function NowPlaying() {
  const nowplaying = "/movie/now_playing?language=en-US&page=1";
  const data = await Responce(nowplaying);

  return (
    <Carousel className=" w-[90%] ml-[50px] h-full">
      <CarouselContent className="">
        {data.results?.slice(0, 5).map((movie: MovieType, index: number) => {
          const imgUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
          return (
            <CarouselItem key={index} >
              <div
                className="p-1 h-[600px] bg-cover bg-center flex"
                style={{
                  backgroundImage: imgUrl ? `url(${imgUrl})` : undefined,
                }}
              >
                {/* <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card> */}
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
