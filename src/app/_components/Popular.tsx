import { TOKEN } from "@/utils/constant";
import { MovieType } from "@/utils/types";
import { Responce } from "@/utils/response";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
export default async function Popular() {
  // fetch movie medeelel setMovie
  const popular = "/movie/popular?language=en-US&page=1";
  const data = await Responce(popular);
  return (
    <div className="w-[58vw] m-[auto]">
      <div className="flex justify-between mt-[52px]">
        <p className="text-[24px] tracking-[-0.6px] font-bold text-[#FAFAFA]">
          Popular
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
              <div>
                <div className="">
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                    width={229}
                    height={340}
                    alt=""
                  />

                  <div className="p-[8px] w-[229px] h-[79px] bg-secondary rounded-sm">
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
