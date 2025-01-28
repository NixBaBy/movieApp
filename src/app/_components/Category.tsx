import { MovieType } from "@/utils/types";
import { Responce } from "@/utils/response";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function Category({
  name,
  link,
  toprated,
}: {
  name: string;
  link: string;
  toprated: string;
}) {
  // fetch movie medeelel setMovie

  const data = await Responce(link);
  return (
    <div className="w-[58vw] m-[auto]">
      <div className="flex justify-between mt-[52px]">
        <p className="text-[24px] tracking-[-0.6px] font-bold">{name}</p>
        <Link href={`/seemore/${toprated}`}>
          <div className="flex w-[88px] items-center  gap-2">
            <p className="text-[14px] ">See More</p>
            <FaArrowRight />
          </div>
        </Link>
      </div>
      <div className="flex flex-wrap mt-[32px] gap-[32px]">
        {data.results.slice(0, 10).map((movie: MovieType, index: number) => {
          return (
            <Link href={`dynamic-detail/${movie?.id}`} key={index}>
              <div>
                <div className="">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
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
