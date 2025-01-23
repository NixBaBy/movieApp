import React from "react";
import { Responce } from "@/utils/response";
import Header from "@/app/_components/Header";
import Image from "next/image";
import { GenreType, MovieType } from "@/utils/types";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Play } from "lucide-react";
import { Footer } from "@/app/_components/Footer";

export default async function page({
  params: { movieDetail },
}: {
  params: { movieDetail: string };
}) {
  const detail = `/movie/${movieDetail}?language=en-US`;
  const data = await Responce(detail);

  const actor = `/movie/${movieDetail}/credits?language=en-US`;
  const data1 = await Responce(actor);

  const likethis = `/movie/${movieDetail}/similar?language=en-US&page=1`;
  const data2 = await Responce(likethis);

  console.log(data2);
  return (
    <div>
      <Header />
      <div className="w-[48vw] m-[auto] mt-[52px]">
        <div className="flex justify-between">
          <div>
            <p className="text-[36px] tracking-[-0.9px]">
              {data.original_title}
            </p>
            <p>{data.release_date}</p>
          </div>
          <div className="flex">
            <p>Rating</p>
            <div className="flex flex-col gap-[4px]">
              <img src="./star.svg" alt="" className="h-[16px]" />
              <div>
                <p>{data?.vote_average}</p>
                <p>/10</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 mt-[24px] relative">
          <Image
            src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
            width={290}
            height={428}
            alt=""
            className="rounded-sm"
          />
          <div className="">
            <Image
              src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
              width={760}
              height={428}
              alt=""
              className="rounded-sm "
            />
          </div>
          <div className="flex gap-3 items-center absolute bottom-[24px] left-[24px]">
            <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-white">
              <Play color="#000000" />
            </div>
            <p>Play trailer</p>
            <p>1:30</p>
          </div>
        </div>
        <div className="mt-[32px] flex flex-col gap-[20px]">
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
          <div className="text-[16px] w-full">
            <p>{data.overview}</p>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex gap-[53px] border-b-[1px] border-solid border-gray-200 h-[40px]">
              <p>Director</p>
              <div className="flex gap-2">
                {data1.crew
                  .filter((crew) => crew.department == "Directing")
                  .slice(0, 3)
                  .map((crew: string, id: number) => {
                    return <p key={id}>{crew?.name} ,</p>;
                  })}
              </div>
            </div>
            <div className="flex gap-[53px] border-b-[1px] border-solid border-gray-200 h-[40px]">
              <p>Writers</p>
              <div className="flex gap-2">
                {data1.crew
                  .filter((crew) => crew.known_for_department == "Writing")
                  .slice(0, 3)
                  .map((crew: string, id: number) => {
                    return <p key={id}>{crew?.name} ,</p>;
                  })}
              </div>
            </div>
            <div className="flex gap-[53px] border-b-[1px] border-solid border-gray-200 h-[40px]">
              <p>Stars</p>
              <div className="flex gap-2">
                {data1.cast
                  .filter((cast) => cast.known_for_department == "Acting")
                  .slice(0, 4)
                  .map((crew: string, id: number) => {
                    return <p key={id}>{crew?.name} ,</p>;
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[32px]">
          <div className="flex justify-between">
            <p className="text-[24px] font-bold tracking-[-0.6px]">
              More Like This
            </p>
            <div className="flex w-[88px] items-center gap-[2px]">
              <p className="text-[#FAFAFA] text-[14px] ">See More</p>
              <ArrowRight className="w-[16px] h-[16px]" />
            </div>
          </div>
          <div className="flex flex-wrap mt-[32px] gap-[26px] mb-[122px]">
            {data2.results.slice(1, 6).map((data: MovieType, index: number) => {
              return (
                <div>
                  <div className="">
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                      width={190}
                      height={291}
                      alt=""
                      className="w-[190px] h-[291px]"
                    />

                    <div className="p-[8px] w-[190px] h-[79px] bg-secondary rounded-sm">
                      <div className="flex gap-2 items-center">
                        <img src="./Vector.png" alt="" className="h-[16px]" />
                        <p>{data?.vote_average}</p>
                        <p>10</p>
                      </div>
                      <p>{data?.original_title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
