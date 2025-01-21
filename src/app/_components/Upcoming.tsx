import { TOKEN } from "@/utils/constant";
import { Responce } from "@/utils/response";
import { MovieType } from "@/utils/types";

export default async function Upcoming() {
  // fetch movie medeelel setMovie

  const upcoming = "/movie/upcoming?language=en-US&page=1";
  const data = await Responce(upcoming);

  return (
    <div className="w-[58vw] m-[auto]">
      <div className="flex justify-between mt-[52px]">
        <p className="text-[24px] tracking-[-0.6px] font-bold text-[#FAFAFA]">
          Up Coming
        </p>
        <div className="flex w-[88px] items-center  gap-2">
          <p className="text-[#FAFAFA] text-[14px] ">See More</p>
          <img src="./Arrow.svg" alt="" className="w-[16px] h-[16px]" />
        </div>
      </div>
      <div className="flex flex-wrap mt-[32px] gap-[32px]">
        {data.results.slice(0, 10).map((movie: MovieType, index: number) => {
          return (
            <div key={index}>
              <div className="">
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie?.poster_path
                  }
                  alt=""
                  className="w-[229px] h-[340px]"
                />
                <div className="p-[8px] w-[229px] h-[79px] bg-[#27272a] rounded-sm">
                  <div className="flex gap-2 items-center">
                    <img src="./Vector.png" alt="" className="h-[16px]" />
                    <p>{movie?.vote_average}</p>
                    <p>10</p>
                  </div>
                  <p>{movie?.original_title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
