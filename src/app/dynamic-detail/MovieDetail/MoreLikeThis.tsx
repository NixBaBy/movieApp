import React from "react";
import { ArrowRight } from "lucide-react";
import { Responce } from "@/utils/response";
import { MovieType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
export default async function MoreLikeThis({
  movieDetail,
}: {
  movieDetail: string;
}) {
  const likethis = `/movie/${movieDetail}/similar?language=en-US&page=1`;
  const data2 = await Responce(likethis);

  return (
    <div>
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
          {data2.results.slice(1, 6).map((data: MovieType, id: string) => {
            return (
              <Link href={`/dynamic-detail/${data?.id}`} key={id}>
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
                        <img src="./Vector.svg" alt="" className="h-[16px]" />
                        <p>{data?.vote_average}</p>
                        <p>10</p>
                      </div>
                      <p>{data?.original_title.substr(0, 15)}</p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
