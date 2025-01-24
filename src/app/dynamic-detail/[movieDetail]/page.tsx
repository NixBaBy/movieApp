import React from "react";
import { Responce } from "@/utils/response";
import Header from "@/app/_components/Header";
import { GenreType } from "@/utils/types";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Footer } from "@/app/_components/Footer";
import Trailer from "@/app/_components/MovieDetail/Trailer";
import CrewCaw from "@/app/_components/MovieDetail/CrewCaw";
import MoreLikeThis from "@/app/_components/MovieDetail/MoreLikeThis";
import Name from "@/app/_components/MovieDetail/Name";

export default async function page(props: {
  params: Promise<{ movieDetail: string }>;
}) {
  const { movieDetail } = await props.params;
  const detail = `/movie/${movieDetail}?language=en-US`;
  const data = await Responce(detail);

  return (
    <div>
      <Header />
      <div className="w-[48vw] m-[auto] mt-[52px]">
        <Name movieDetail={movieDetail} />
        <Trailer movieDetail={movieDetail} />
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
          <CrewCaw movieDetail={movieDetail} />
        </div>
        <MoreLikeThis movieDetail={movieDetail} />
      </div>

      <Footer />
    </div>
  );
}
