import { Responce } from "@/utils/response";
import { MovieType } from "@/utils/types";
import Link from "next/link";

export default async function TopRated() {
  const toprated = "/movie/top_rated?language=en-US&page=1";
  const data = await Responce(toprated);

  return (
    <div className="w-[58vw] m-[auto]">
      <div className="flex justify-between mt-[52px]">
        <p className="text-[24px] tracking-[-0.6px] font-bold text-[#FAFAFA]">
          Top Rated
        </p>
        <div className="flex w-[88px] items-center  gap-2">
          <p className="text-[#FAFAFA] text-[14px] ">See More</p>
          <img src="./Arrow.svg" alt="" className="w-[16px] h-[16px]" />
        </div>
      </div>
      <div className="flex flex-wrap mt-[32px] gap-[32px]">
        {data.results.slice(0, 10).map((movie: MovieType, index: number) => {
          return (
            <Link href={`dynamic-detail/${movie?.id}`} key={index}>
              <div key={index}>
                <div className="">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      movie?.poster_path
                    }
                    alt=""
                    className="w-[229px] h-[340px] hover:"
                  />
                  <div className="p-[8px] w-[229px] h-[79px]  bg-secondary  rounded-sm">
                    <div className="flex gap-2 items-center">
                      <img src="./Vector.png" alt="" className="h-[16px]" />
                      <p>{movie?.vote_average}</p>
                      <p>10</p>
                    </div>
                    <p>{movie?.original_title}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
