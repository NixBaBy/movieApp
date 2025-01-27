import { Button } from "@/components/ui/button";
import { Responce } from "@/utils/response";
import { GenreType, MovieType } from "@/utils/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function page(props: {
  params: Promise<{ genreid: string }>;
}) {
  const { genreid } = await props.params;

  const detail = `/discover/movie?language=en&with_genres=${genreid}&page=1`;
  const data = await Responce(detail);

  const genre = "/genre/movie/list?language=en";
  const data1 = await Responce(genre);
  console.log(data);
  return (
    <div className="w-[58%] m-auto mt-[52px]">
      <p className="mb-[32px] text-[#FAFAFA] text-[30px] font-bold tracking-[-0.75px]">
        Search filter
      </p>
      <div className="flex items-start gap-9">
        <div className="flex flex-col gap-5 w-[20vw]">
          <div className="">
            <p className="text-[24px] font-bold tracking-[-0.6px] text-[#fafafa]">
              Genres
            </p>
            <p>See lists of movies by genre</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {data1.genres.map((data: GenreType, index: number) => {
              return (
                <Link href={`/genre-detail/${data.id}`}>
                  <Button
                    key={index}
                    variant="outline"
                    className=" border border-solid border-[#27272A] rounded-full py-[2px] px-[10px] flex"
                  >
                    {data?.name}
                    <ChevronRight />
                  </Button>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-[1px] bg-[#27272A] h-[185vh]"></div>
        <div>
          <p className="text-[20px] font-bold tracking-[-0.5px] ">
            {data.total_results} titles
          </p>
          <div className="flex flex-wrap mt-[32px] gap-[32px] w-[35vw]">
            {data.results.map((movie: MovieType, index: number) => {
              return (
                <Link href={`/dynamic-detail/${movie?.id}`} key={index}>
                  <div className="rounded-md overflow-hidden">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                      width={165}
                      height={244}
                      alt=""
                    />

                    <div className="p-[8px] w-[165px] h-[79px] bg-secondary rounded-sm">
                      <div className="flex gap-2 items-center">
                        <img src="./Vector.png" alt="" className="h-[16px]" />
                        <p>{movie?.vote_average}</p>
                        <p>10</p>
                      </div>
                      <p>{movie?.original_title}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
